'use strict';

let config, circuit;

function onComponentCreated(data) {
  console.log(data);
}

function onComponentDeleted(data) {
  console.log(data);
}

function onComponentChanged(data) {
  console.log(data);
}


function workspaceChangeListener(event) {
  switch (event.type) {
    case Blockly.Events.CREATE:
      onComponentCreated(event.xml);
      break;
    case Blockly.Events.DELETE:
      onComponentDeleted(event.blockId);
      break;
    case Blockly.Events.CHANGE:
      onComponentChanged({ 
        block: event.blockId, 
        field: event.name, 
        value: event.newValue, 
      });
      break;
  }
}

function start() {
  const toolbox = document.getElementById('toolbox-Configuration');
  const media = './blockly/media/';
  const device = { group: 'arduino', robot: 'nano' };

  config = Blockly.inject('blocklyDiv', { media, toolbox });
  config.setDevice(device);
  config.addChangeListener(workspaceChangeListener);

  circuit = configuration('#confDiv', device);
}