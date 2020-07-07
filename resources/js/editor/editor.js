import { configEnconde, configDecode } from './convert.js';
import arduino from '../components/arduino.js';
import WireCreator from './wire_builder.js';
import { svg } from './utils.js';
import makeComponent from './make_component.js';
import DragContainer from './drag_container.js';


class Editor {
  constructor(containerSelector) {

    this.componentsContainer = svg('g');

    this.wiresContainer = svg('g');

    const wrapper = svg('g', { 'transform': 'scale(1, 1)', });
    wrapper.appendChild(this.wiresContainer);
    wrapper.appendChild(this.componentsContainer);

    const svgContainer = svg('svg', {
      'xmlns': 'http://www.w3.org/2000/svg',
      'version': '1.1',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'width': '100%',
      'height': '100%',
    });
    svgContainer.appendChild(wrapper);

    this.draggable = new DragContainer(svgContainer)
    this.draggable.bindElement(wrapper);

    document.querySelector(containerSelector).appendChild(svgContainer);

    window.addEventListener('DOMMouseScroll', (evt) => {
      evt.preventDefault();
    });

    this.board = null;

    this.components = {};

    this.container = wrapper;

    this.wires = [];

    this.wire = new WireCreator(this);
  }

  addComponent(component) {
    const { element } = component;

    this.componentsContainer.appendChild(element);

    this.draggable.bindElement(element);

  }

  addWire(wire) {
    this.componentsContainer.appendChild(wire.element);
  }

  async load(file) {
    // read configurations
    const { components } = configDecode(file);

    // create robot board
    this.board = await makeComponent({ ...arduino, position: { x: 230, y: 230 } });
    this.addComponent(this.board);

    // create components
    for (let id in components) {
      const properties = components[id];
      const component = await makeComponent({ id, ...properties });
      this.addComponent(component);
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