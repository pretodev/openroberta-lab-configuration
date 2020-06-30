import Port from './port.js';
import Component from './component.js';
import { getSVG, svg } from './utils.js';

export default async function ({ editor, svgPath, name, position, ports }) {
  let element;
  if (svgPath) {
    element = await getSVG(svgPath);
  } else {
    const background = svg('path', { 'fill': 'lightgrey', 'd': 'm0,2 H 150 v 50 H 0 z' });
    const label = svg('text', {
      'transform': 'translate(75, 25)',
      'dominant-baseline': 'middle',
      'text-anchor': 'middle'
    });
    label.innerHTML = name;

    element = svg('g');
    element.appendChild(background);
    element.appendChild(label);
  }

  const component = new Component({ editor, element, name, position });

  const placeholderPosition = { x: (150 / ports.length) / 2, y: 40 };
  ports.forEach(({ name, position }) => {
    component.addPort(new Port({
      editor,
      component,
      name,
      position: position ?? placeholderPosition,
    }));
  });
}