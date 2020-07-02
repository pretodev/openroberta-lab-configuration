import { configEnconde, configDecode } from './convert.js';
import arduino from '../components/arduino.js';
import WireCreator from './wire_builder.js';
import { svg } from './utils.js';
import makeComponent from './make_component.js';

class Editor {
  constructor(containerSelector) {

    const wrapper = svg('svg', { 'width': '100%', 'height': '100%' });
    document.querySelector(containerSelector).appendChild(wrapper);

    this.board = null;

    this.components = {};

    this.container = wrapper;

    this.wires = [];

    this.wire = new WireCreator(this);

  }

  async load(file) {
    // read configurations
    const { components } = configDecode(file);

    // create robot board
    this.board = await makeComponent({ editor: this, ...arduino, position: { x: 230, y: 230 } });

    // create components
    for (let id in components) {
      const properties = components[id];
      this.components[id] = await makeComponent({ editor: this, ...properties });
    }

  }

  get xml() {
    return configEnconde({
      board: this.board,
      components: this.components
    });
  }
}

export default Editor;