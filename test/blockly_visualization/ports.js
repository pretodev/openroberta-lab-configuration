'use strict';

goog.provide('CustomFields.FieldRobot');

goog.require('Blockly.Field');
goog.require('goog.dom');
goog.require('goog.math.Size');
goog.require('goog.userAgent');

const ports = [
  { name: 'SCL', position: { x: 68.75, y: 4.88 } },
  { name: 'SDA', position: { x: 75.81, y: 4.88 } },
  { name: 'AREF', position: { x: 82.87, y: 4.88 } },
  { name: 'GND', position: { x: 89.93, y: 4.88 } },
  { name: '13', position: { x: 96.99, y: 4.88 } },
  { name: '12', position: { x: 104.05, y: 4.88 } },
  { name: '11', position: { x: 111.11, y: 4.88 } },
  { name: '10', position: { x: 118.17, y: 4.88 } },
  { name: '9', position: { x: 125.23, y: 4.88 } },
  { name: '8', position: { x: 132.29, y: 4.88 } },
  { name: '7', position: { x: 145.36, y: 4.88 } },
  { name: '6', position: { x: 152.42, y: 4.88 } },
  { name: '5', position: { x: 159.48, y: 4.88 } },
  { name: '4', position: { x: 166.54, y: 4.88 } },
  { name: '3', position: { x: 173.6, y: 4.88 } },
  { name: '2', position: { x: 180.66, y: 4.88 } },
  { name: '1', position: { x: 187.72, y: 4.88 } },
  { name: '0', position: { x: 194.78, y: 4.88 } },
  { name: 'NOTUSER', position: { x: 96.99, y: 141.97 } },
  { name: 'IOREF', position: { x: 104.05, y: 141.97 } },
  { name: 'RESET', position: { x: 111.11, y: 141.97 } },
  { name: '3,3V', position: { x: 118.17, y: 141.97 } },
  { name: '5V', position: { x: 125.23, y: 141.97 } },
  { name: 'GND', position: { x: 132.29, y: 141.97 } },
  { name: 'GND', position: { x: 139.35, y: 141.97 } },
  { name: 'Vin', position: { x: 146.41, y: 141.97 } },
  { name: 'A5', position: { x: 159.48, y: 141.97 } },
  { name: 'A4', position: { x: 166.54, y: 141.97 } },
  { name: 'A3', position: { x: 173.6, y: 141.97 } },
  { name: 'A2', position: { x: 180.66, y: 141.97 } },
  { name: 'A1', position: { x: 187.72, y: 141.97 } },
  { name: 'A0', position: { x: 194.78, y: 141.97 } },
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
