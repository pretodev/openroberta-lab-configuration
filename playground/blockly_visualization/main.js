'use strict';

let config, circuit;

function onComponentCreated(xml) {
  circuit.addComponent(xml);
}

function onComponentChanged({ block, field, value }) {
  field = field.toLowerCase();
  circuit.components[block][field] = value;
}

function onComponentDeleted(id) {
  circuit.removeComponentById(id);
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