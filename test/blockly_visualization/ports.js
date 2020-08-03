'use strict';

goog.provide('CustomFields.FieldRobot');

goog.require('Blockly.Field');
goog.require('goog.dom');
goog.require('goog.math.Size');
goog.require('goog.userAgent');

const ports = [
  { name: 'SCL', position: { x: 93, y: 7.8 } },
  { name: 'SDA', position: { x: 102.6, y: 7.8 } },
  { name: 'AREF', position: { x: 112.2, y: 7.8 } },
  { name: 'GND', position: { x: 121.9, y: 7.8 } },
  { name: '13', position: { x: 131.5, y: 7.8 } },
  { name: '12', position: { x: 141.1, y: 7.8 } },
  { name: '11', position: { x: 150.7, y: 7.8 } },
  { name: '10', position: { x: 160.3, y: 7.8 } },
  { name: '9', position: { x: 169.9, y: 7.8 } },
  { name: '8', position: { x: 179.6, y: 7.8 } },
  { name: '7', position: { x: 195, y: 7.8 } },
  { name: '6', position: { x: 204.7, y: 7.8 } },
  { name: '5', position: { x: 214.3, y: 7.8 } },
  { name: '4', position: { x: 223.9, y: 7.8 } },
  { name: '3', position: { x: 233.5, y: 7.8 } },
  { name: '2', position: { x: 243.1, y: 7.8 } },
  { name: '1', position: { x: 252.8, y: 7.8 } },
  { name: '0', position: { x: 262.4, y: 7.8 } },
  { name: 'NOTUSER', position: { x: 127.7, y: 190.5 } },
  { name: 'IOREF', position: { x: 137.3, y: 190.5 } },
  { name: 'RESET', position: { x: 146.9, y: 190.5 } },
  { name: '3,3V', position: { x: 156.6, y: 190.5 } },
  { name: '5V', position: { x: 166.2, y: 190.5 } },
  { name: 'GND', position: { x: 175.8, y: 190.5 } },
  { name: 'GND', position: { x: 185.4, y: 190.5 } },
  { name: 'Vin', position: { x: 195, y: 190.5 } },
  { name: 'A0', position: { x: 214.3, y: 190.5 } },
  { name: 'A1', position: { x: 223.9, y: 190.5 } },
  { name: 'A2', position: { x: 233.5, y: 190.5 } },
  { name: 'A3', position: { x: 243.1, y: 190.5 } },
  { name: 'A4', position: { x: 252.8, y: 190.5 } },
  { name: 'A5', position: { x: 262.4, y: 190.5 } },
];

CustomFields.FieldRobot = function (opt_robot) {
  this.robot = opt_robot || 'arduino';
  this.height_ = Number(200);
  this.width_ = Number(300);
  this.size_ = new goog.math.Size(this.width_, this.height_ + 2 * Blockly.BlockSvg.INLINE_PADDING_Y);
}
goog.inherits(CustomFields.FieldRobot, Blockly.Field);

CustomFields.FieldRobot.prototype.rectElement_ = null;

CustomFields.FieldRobot.prototype.EDITABLE = false;

CustomFields.FieldRobot.prototype.init = function () {
  if (this.fieldGroup_) {
    return;
  }

  this.fieldGroup_ = Blockly.createSvgElement('g', {}, null);
  if (!this.visible_) {
    this.fieldGroup_.style.display = 'none';
  }

  this.board_ = Blockly.createSvgElement('image',
    {
      'height': this.height_ + 'px',
      'width': this.width_ + 'px'
    }, this.fieldGroup_);
  this.board_.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '../../src/assets/arduino.svg');

  //console.log(this.sourceBlock_);

  const portsGroup = Blockly.createSvgElement('g', {}, this.fieldGroup_);
  this.posts_ = ports.map(({ position }) => {
    return Blockly.createSvgElement('rect', {
      'width': 5,
      'height': 5,
      'fill': 'red',
      'stroke': 'black',
      'stroke-width': 1,
      'r': 3,
      'x': position.x,
      'y': position.y,
      'opacity': 1,
    }, portsGroup);
  });

  this.sourceBlock_.getSvgRoot().appendChild(this.fieldGroup_);
}

CustomFields.FieldRobot.prototype.setPosition = function (position) {
  if (!position) {
    return;
  }
  console.log(position);
}
