'use strict';
function start() {

  const toolbox = document.getElementById('toolbox-Configuration');
  const media = 'blockly/media/';
  const device = { group: 'arduino', robot: 'uno' };

  const workspace = Blockly.inject('blocklyDiv', { media, toolbox });
  workspace.setDevice(device);

  CircuitVisualization.init(workspace);
}