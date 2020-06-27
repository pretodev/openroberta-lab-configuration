import * as parser from './parser.js';
import createComponent from './component.js';
import arduino from '../components/arduino.js';
import WireBuilder from './wire_builder.js';
import { svg } from './utils.js';

export default function () {
  const self_ = {};

  function bindEvents() {

  }

  function init(containerSelector) {
    const wrapper = svg('svg', { 'width': '100%', 'height': '100%' });
    document.querySelector(containerSelector).appendChild(wrapper);
    self_.container = wrapper;
    self_.wireBuilder = WireBuilder(self_);

    bindEvents();
  }

  async function load(file) {
    const { components } = await parser.parse(file);
    self_.board = await createComponent(self_, { ...arduino, position: { x: 230, y: 230 } });
    self_.components = [];
    for (let name in components) {
      const props = components[name];
      const component = await createComponent(self_, { name, ...props });
      self_.components.push(component);
    }
  }

  return { init, load };
}
