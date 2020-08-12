import { createPortSvg } from './utils';
import { createRobotBlock } from './robot_block';
import WireDrawer from './wires';
import injectCSS from './css';

export default class CircuitVisualization {
  constructor() {
    if (!Blockly) {
      throw new Error('Blockly required');
    }

    injectCSS();

    Blockly.Blocks['robot'] = createRobotBlock();

    this.components_ = {};

    this.connections_ = [];
  }

  setWorkspace = (workspace) => {
    this.workspace_ = workspace;
    this.workspace_.addChangeListener(this.onChangeListener_);

    this.wireGroup_ = Blockly.createSvgElement('g', {}, this.workspace_.svgGroup_);

    this.injectRobotBoard_();

    document.addEventListener('mousemove', () => {
      if(Blockly.dragMode_ == Blockly.DRAG_FREE || workspace.isScrolling){
        this.renderConnections_();
      }
    });  
  }

  injectRobotBoard_() {
    const xml = `
      <block_set>
        <instance x="150" y="150">
          <block type="robot" id="robot"></block>
        </instance>
      </block_set>`;
    const dom = Blockly.Xml.textToDom(xml, this.workspace_)
    Blockly.Xml.domToWorkspace(dom, this.workspace_);
    this.robot_ = this.workspace_.getBlockById('robot');
  }

  onChangeListener_ = (event) => {
    this.renderConnections_();
    if (!event.blockId) {
      return;
    }
    const block = this.workspace_.getBlockById(event.blockId);
    this.renderBlockBackground_(block);

    switch (event.type) {
      case Blockly.Events.CREATE:
        this.createPortView_(block);
        break;
      case Blockly.Events.CHANGE:
        this.updateConnections_(block);
        break;
      case Blockly.Events.DELETE:
        this.deleteConnections_(event.blockId);
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

  createPortView_ = (block) => {

    const width = block.svgGroup_.getBoundingClientRect().width;

    block.inputList.forEach((input, index) => {

      if (index === 0) return;

      input.fieldRow.forEach(({ fieldGroup_, name, value_ }) => {
        name = name ?? value_

        if (name) {
          const { matrix } = fieldGroup_.transform.baseVal.getItem(0);
          const margin = width - matrix.e - 22;
          const position = { x: (matrix.e + margin), y: matrix.f + 6 };

          createPortSvg(block.getSvgRoot(), name, position);

          const wireSvg = Blockly.createSvgElement('path', {
            'fill': 'none',
            'stroke': '#40B942',
            'stroke-width': 1.8,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
          }, this.wireGroup_);

          this.connections_.push({
            blockId: block.id,
            connectedTo: block.getFieldValue(name) ?? value_,
            name,
            position,
            wireSvg,
          });

        };
      });
    });
  }

  updateConnections_ = (block) => {
    let connections = this.connections_
      .filter(connection => connection.blockId === block.id);
    connections = connections.map(({ name, ...others }) => ({
      name,
      ...others,
      connectedTo: block.getFieldValue(name),
    }));
    this.connections_ = [...this.connections_, ...connections];
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

    let path = block.svgPath_.getAttribute('d');
    const width = parseFloat(path.substring(
      path.indexOf("H") + 2,
      path.indexOf("v") - 1
    ));
    const newWidth = width + 16
    path = path.replace(width.toString(), newWidth.toString());
    block.svgPath_.setAttribute('d', path);
  }
}