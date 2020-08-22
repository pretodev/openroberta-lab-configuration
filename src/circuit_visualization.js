import Port from './port';
import { createRobotBlock } from './robot_block';
import WireDrawer from './wires';
import injectCSS from './css';
import fixPortValue from './fix_port_value';
import _ from 'lodash';

export default class CircuitVisualization {

  static domToWorkspace(dom, workspace){
    if(workspace.device !== 'arduino'){
      throw Error('Not device suported');
    }

    injectCSS();
    
    const confVis = new CircuitVisualization(workspace, dom);

    return {
      dispose: confVis.dispose.bind(confVis),
      refresh: confVis.refresh.bind(confVis),
      resetRobot: confVis.reset.bind(confVis),
    };
  }

  constructor(workspace, dom) {
    if (!Blockly) {
      throw new Error('Blockly required');
    }

    this.components_ = {};

    this.connections_ = [];

    this.workspace_ = workspace;

    this.dom_ = dom;

    this.currentRobot_ = `${this.workspace_.device}_${this.workspace_.subDevice}`;

    this.injectRobotBoard_();

    this.workspace_.addChangeListener(this.onChangeListener_);

    this.wireGroup_ = Blockly.createSvgElement('g', {}, this.workspace_.svgGroup_);

    document.addEventListener('mousemove', () => {
      if(Blockly.dragMode_ == Blockly.DRAG_FREE || workspace.isScrolling){
        this.renderConnections_();
      }
    }); 
  }

  reset(){
    const currentRobot = `${this.workspace_.device}_${this.workspace_.subDevice}`;;
    if(currentRobot !== this.currentRobot_){
      this.currentRobot_ = currentRobot;
      this.clear_();
      this.injectRobotBoard_();
    }
  }

  refresh() {
    this.workspace_.getAllBlocks().forEach(block => {
      this.renderBlockBackground_(block);
      this.updateBlockPorts_(block);
      this.renderConnections_();
    });
  }

  dispose(){
    this.workspace_.removeChangeListener(this.onChangeListener_);
    this.wireGroup_.remove();
  }

  injectRobotBoard_() {
    this.robotXml_?.remove();

    Blockly.Blocks['robot'] = createRobotBlock(this.currentRobot_);
    const robotXml = `<instance x="250" y="250"><block type="robot" id="robot"></block></instance>`;
    const oParser = new DOMParser();
    this.robotXml_ = oParser.parseFromString(robotXml, 'text/xml').firstChild;

    this.dom_.appendChild(this.robotXml_);
    Blockly.Xml.domToWorkspace(this.dom_, this.workspace_);

    this.robot_ = this.workspace_.getBlockById('robot');
  }

  clear_ = () => {
    while (this.workspace_.getAllBlocks().length) {
      this.workspace_.getAllBlocks()[0].dispose();
    }
  }

  onChangeListener_ = (event) => {
    this.renderConnections_();
    if (!event.blockId) {
      return;
    }
    const block = this.workspace_.getBlockById(event.blockId);

    if(event.type !== Blockly.Events.UI)
      this.renderBlockBackground_(block);
    switch (event.type) {
      case Blockly.Events.CREATE:
        this.createBlockPorts_(block);
        break;
      case Blockly.Events.CHANGE:
        this.updateBlockPorts_(block);
        this.updateConnections_(block);
        break;
      case Blockly.Events.DELETE:
        this.deleteConnections_(event.blockId);
        if(block.ports){
          block.ports.forEach(port => port.element.remove());
        }
        break;
    }
  }

  renderConnections_ = () => {
    if (this.connections_.length === 0) return;

    const robotPosition = this.robot_.getRelativeToSurfaceXY();

    const { matrix } = this.workspace_.getCanvas().transform.baseVal.getItem(0);

    this.connections_.forEach(({ blockId, position, connectedTo, wireSvg }) => {
      const block = this.workspace_.getBlockById(blockId);
      if (!block) return;

      const blockPosition = block.getRelativeToSurfaceXY();

      const origin = {
        x: blockPosition.x + position.x + matrix.e + 2.5,
        y: blockPosition.y + position.y + matrix.f + 2.5,
      }

      const robotConnection = this.robot_.getPortByName(connectedTo)
      if (!robotConnection) return;

      const destination = {
        x: robotPosition.x + robotConnection.position.x + matrix.e + 2.5,
        y: robotPosition.y + robotConnection.position.y + matrix.f + 2.5,
      }

      const drawer = new WireDrawer(origin, destination);

      wireSvg.setAttribute('d', drawer.path);
    });
  }

  updateBlockPorts_ = (block) => {
    const positionX = block.width + 4;

    block.ports.forEach(port => {
      const position = port.position;
      port.moveTo({...position, x: positionX});
    }); 

    this.connections_ = this.connections_.map(({position, ...others}) => {
      if(others.blockId !== block.id){
        return {position, ...others};
      }

      return {
        position: {...position, x: positionX},
        ...others,
      };
    });
  }

  createBlockPorts_ = (block) => {

    const positionX = block.width + 4;

    const ports = [];

    block.inputList.forEach((input, index) => {

      if (index === 0) return;

      input.fieldRow.forEach(({ fieldGroup_, name, value_ }) => {
        name = name ?? value_

        if (name) {
          const { matrix } = fieldGroup_.transform.baseVal.getItem(0);

          const position = { x: positionX, y: matrix.f + 6 };

          const port = new Port(block.getSvgRoot(), name, position);

          ports.push(port);

          const wireSvg = Blockly.createSvgElement('path', {
            'fill': 'none',
            'stroke': '#40B942',
            'stroke-width': 1.8,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
          }, this.wireGroup_);

          this.connections_.push({
            blockId: block.id,
            connectedTo: fixPortValue(block.getFieldValue(name) ?? value_),
            name,
            position,
            wireSvg,
          });

        };
      });
    });

    block.ports = ports;
  }

  updateConnections_ = (block) => {
    let connections = this.connections_
      .filter(connection => connection.blockId === block.id);

    connections = connections.map(({ name, ...others }) => ({
      name,
      ...others,
      connectedTo: fixPortValue(block.getFieldValue(name) ?? others.connectedTo),
    }));

    this.connections_ = this.connections_
      .filter(connection => connection.blockId !== block.id);

    this.connections_ = [...this.connections_, ...connections];

    this.renderConnections_();
  }

  deleteConnections_ = (blockId) => {
    this.connections_ = this.connections_
      .filter(connection => {
        if (connection.blockId === blockId) {
          connection.wireSvg.remove();
          return false;
        }
        return true;
      });
  }

  renderBlockBackground_ = (block) => {
    if (!block) return;

    const newWidth = block.width + 16;
    let path = block.svgPath_.getAttribute('d');
    path = path.replace(block.width.toString(), newWidth.toString());
    block.svgPath_.setAttribute('d', path);
  }
}