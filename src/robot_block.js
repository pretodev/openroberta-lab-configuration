import { createPortSvg } from './utils';
import ports from './robots/arduino_uno';
import robotMapper from './robots/robot_mapper';

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
    this.board_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `../../src/assets/${this.robot}.svg`);
  }

  initPorts_() {
    const portsGroupSvg = Blockly.createSvgElement('g', {}, this.element_);
    this.ports_ = robotMapper[this.robot].map((props) => {
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

export function createRobotBlock(robotName) {
  return {
    init() {
      this.type_ = 'robot';
      this.svgPath_.remove();
      this.robot_ = new RobotViewField(robotName);
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