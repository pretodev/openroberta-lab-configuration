'use strict';
function start() {

  const toolbox = document.getElementById('toolbox-Configuration');
  const media = 'blockly/media/';
  const device = { group: 'arduino', robot: 'nano' };

  const workspace = Blockly.inject('blocklyDiv', { media, toolbox });
  workspace.setDevice(device);

  CircuitVisualization.init(workspace);
}