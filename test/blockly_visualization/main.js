'use strict';

function createPortSvg(parent, name, position) {
  const portSvg = Blockly.createSvgElement('rect', {
    'class': 'port',
    'width': 5,
    'height': 5,
    'fill': 'red',
    'stroke': 'black',
    'stroke-width': 1,
    'x': position.x,
    'y': position.y,
    'r': 3,
  }, parent);

  tippy(portSvg, {
    content: name,
  });

  return portSvg;
}

class RobotViewField extends Blockly.Field {
  static EDITABLE = false;

  static rectElement_ = null;

  constructor(opt_robot) {
    super();
    this.robot = opt_robot || 'arduino';

    this.height_ = Number(200);

    this.width_ = Number(300);

    this.size_ = new goog.math.Size(this.width_, this.height_ + 2 * Blockly.BlockSvg.INLINE_PADDING_Y);

    this.ports_ = [];
  }

  init() {
    if (this.element_) {
      return;
    }

    this.element_ = Blockly.createSvgElement('g', {}, null);
    if (!this.visible_) {
      this.element_.style.display = 'none';
    }

    this.initBoardView_();
    this.initPorts_();

    this.sourceBlock_.getSvgRoot().appendChild(this.element_);
  }

  initBoardView_() {
    this.board_ = Blockly.createSvgElement('image', {}, this.element_);
    this.board_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../../src/assets/arduino.svg');
  }

  initPorts_() {
    const portsGroupSvg = Blockly.createSvgElement('g', {}, this.element_);
    this.ports_ = ports.map((props) => {
      const { name, position } = props;
      const portSvg = createPortSvg(portsGroupSvg, name, position);
      return { portSvg, ...props };
    });
  }

  getPortByName(portName) {
    const index = this.ports_.findIndex(port => port.name === portName);
    return this.ports_[index];
  }

  setPosition(position) {
    if (!position) {
      return;
    }
  }

}

function createRobotBlock() {
  return {
    init() {
      this.type_ = 'robot';
      this.svgPath_.remove();
      this.robot_ = new RobotViewField();
      this
        .appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(this.robot_, 'ROBOT');

      this.getPortByName = (portName) => {
        return this.robot_.getPortByName(portName);
      }
    },
  }
}

class CircuitVisualization {
  constructor() {
    if (!Blockly) {
      throw new Error('Blockly required');
    }

    Blockly.Blocks['robot'] = createRobotBlock();

    this.components_ = {};

    this.connections_ = [];
  }

  setWorkspace = (workspace) => {
    this.workspace_ = workspace;
    this.workspace_.addChangeListener(this.onChangeListener_);

    this.wireGroup_ = Blockly.createSvgElement('g', {}, this.workspace_.svgGroup_);

    this.injectRobotBoard_();

    Blockly.bindEvent_(document, 'mousemove', this, this.renderConnections_);
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
    if (!event.blockId) {
      return;
    }
    const block = this.workspace_.getBlockById(event.blockId);
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
      const destination = {
        x: robotPosition.x + robotConnection.position.x + matrix.e + 2.5,
        y: robotPosition.y + robotConnection.position.y + matrix.f + 2.5,
      }

      const path = `M ${origin.x} ${origin.y} L ${destination.x} ${destination.y}`;
      wireSvg.setAttribute('d', path);
    });
  }

  createPortView_ = (block) => {

    const width = block.svgGroup_.getBoundingClientRect().width;

    block.inputList.forEach((input, index) => {

      if (index === 0) return;

      input.fieldRow.forEach(({ fieldGroup_, name }) => {
        if (name) {
          const { matrix } = fieldGroup_.transform.baseVal.getItem(0);
          const margin = width - matrix.e - 5;
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
            connectedTo: block.getFieldValue(name),
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
        connection.wireSvg.remove();
        return connection.blockId !== blockId;
      });
  }
}

function start() {
  const circuit = new CircuitVisualization();

  const toolbox = document.getElementById('toolbox-Configuration');
  const media = '../blockly/media/';
  const device = { group: 'arduino', robot: 'nano' };

  const workspace = Blockly.inject('blocklyDiv', { media, toolbox });
  workspace.setDevice(device);

  circuit.setWorkspace(workspace);
}