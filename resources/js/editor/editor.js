import { configEncode, configDecode } from './convert.js';
import arduino from '../components/arduino.js';
import connector from './wire_builder.js';
import { svg } from './utils.js';
import makeComponent from './make_component.js';
import DragContainer from './drag_container.js';


class Editor {
  constructor(containerSelector) {

    const componentsContainer = svg('g');

    const wiresContainer = svg('g');

    const portsContainer = svg('g');

    const wrapper = svg('g', { 'transform': 'scale(1, 1)', });

    wrapper.appendChild(componentsContainer);
    wrapper.appendChild(wiresContainer);
    wrapper.appendChild(portsContainer);

    const svgContainer = svg('svg', {
      'xmlns': 'http://www.w3.org/2000/svg',
      'version': '1.1',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'width': '100%',
      'height': '100%',
    });

    svgContainer.appendChild(wrapper);

    document.querySelector(containerSelector).appendChild(svgContainer);

    this.board = null;

    this.components = {};

    this.container = wrapper;

    const draggable = new DragContainer(svgContainer);
    draggable.bindElement(wrapper);

    this.addComponent = makeComponent({
      connector: connector(wiresContainer),
      draggable: draggable,
      portsContainer,
      componentsContainer,
    });
  }

  async load(file) {
    // read configurations
    const { components } = configDecode(file);

    // create robot board
    await this.addComponent({ ...arduino, position: { x: 230, y: 230 } });

    // create components
    for (let id in components) {
      const properties = components[id];
      this.addComponent({ id, ...properties });
    }

  }

  get xml() {
    return configEncode({
      board: this.board,
      components: this.components
    });
  }
}

export default Editor;