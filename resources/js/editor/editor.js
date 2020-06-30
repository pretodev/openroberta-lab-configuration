import * as parser from './parser.js';
import arduino from '../components/arduino.js';
import WireCreator from './wire_builder.js';
import { svg } from './utils.js';
import makeComponent from './make_component.js';

class Editor {
  constructor(containerSelector) {

    const wrapper = svg('svg', { 'width': '100%', 'height': '100%' });
    document.querySelector(containerSelector).appendChild(wrapper);

    this.board = null;

    this.components = [];

    this.container = wrapper;

    this.wire = new WireCreator(this);
  }

  async load(file) {
    // read configurations
    const { components } = await parser.parse(file);

    // create robot board
    this.board = await makeComponent({ editor: this, ...arduino, position: { x: 230, y: 230 } });

    // create components
    for (let name in components) {
      const { position, svgName, ports } = components[name];
      const component = await makeComponent({ editor: this, name, position, svgName, ports });
      this.components.push(component);
    }

  }
}

export default Editor;