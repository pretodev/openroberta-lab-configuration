import { getSVG, svg } from './utils.js';
import Component from './component.js';
import Port from './port.js';

export default function ({ connector, portsContainer, draggable, componentsContainer, }) {

  return async function (properties) {
    const { svgPath, name, position, ports, type } = properties;

    let wrapper = svg('svg', {
      'class': type,
      'viewBox': '-1000 -1000 2000 2000',
      'width': 2000,
      'height': 2000,
      'x': -1000,
      'y': -1000,
    });

    const placeholderPosition = { x: (150 / ports.length) / 2, y: 40 };

    if (svgPath) {
      const svg = await getSVG(svgPath);
      wrapper.appendChild(svg);
    } else {
      const background = svg('path', { 'fill': 'lightgrey', 'd': 'm0,2 H 150 v 50 H 0 z' });
      const label = svg('text', {
        'x': 75,
        'y': 25,
        'dominant-baseline': 'middle',
        'text-anchor': 'middle'
      });
      label.innerHTML = name;

      wrapper.appendChild(background);
      wrapper.appendChild(label);

      ports.forEach(() => {
        if (!svgPath) {
          wrapper.appendChild(svg('rect', {
            'width': 5,
            'height': 5,
            'fill': 'black',
            'x': placeholderPosition.x,
            'y': placeholderPosition.y,
            'r': 3,
          }));
        }
      });

    }

    const element = svg('g', {
      'transform': `translate(${position.x}, ${position.y}) rotate(0) scale(1,1)`,
      'class': 'draggable',
    });

    element.appendChild(wrapper);

    const component = new Component({ element, ...properties });

    ports.forEach(({ position, ...others }) => {

      const portPosition = position ?? placeholderPosition;
      const port = new Port({
        position: {
          x: component.position.x + portPosition.x,
          y: component.position.y + portPosition.y,
        },
        ...others,
        onClick: connector,
      });

      component.addListener(() => {
        port.position = {
          x: component.position.x + portPosition.x,
          y: component.position.y + portPosition.y,
        }
        port.notifyListeners();
      });

      portsContainer.appendChild(port.element);
    });


    componentsContainer.appendChild(element);

    draggable.bindElement(element, () => {
      component.notifyListeners();
    });

  }


}