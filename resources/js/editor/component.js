import createPort from './port.js';
import { getSVG, svg } from './utils.js';

export default async function (editor, { name, svgPath, position, ports }) {
  const self_ = { name, position };
  if (svgPath) {
    self_.element = await getSVG(svgPath);
  } else {
    const background = svg('path', { 'fill': 'lightgrey', 'd': 'm0,2 H 150 v 50 H 0 z' });

    const label = svg('text', {
      'transform': 'translate(75, 25)',
      'dominant-baseline': 'middle',
      'text-anchor': 'middle'
    });
    label.innerHTML = name;

    self_.element = svg('g');
    self_.element.appendChild(background);
    self_.element.appendChild(label);
  }

  self_.element.setAttribute('transform', `translate(${position.x}, ${position.y})`);
  editor.container.appendChild(self_.element);

  new PlainDraggable(self_.element);

  ports.forEach(({ name, position }) => createPort(editor, self_, {
    name,
    position: position ?? { x: (150 / ports.length) / 2, y: 40 }
  }));

  return self_;
}