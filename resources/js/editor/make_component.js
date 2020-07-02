import Port from './port.js';
import Component from './component.js';
import { getSVG, svg } from './utils.js';
import Wire from './wire.js';

export default async function ({ editor, svgPath, name, position, ports, type }) {
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

  const component = new Component({ editor, element, name, position, type });

  const placeholderPosition = { x: (150 / ports.length) / 2, y: 40 };
  ports.forEach(({ name, position, connectedTo }) => {
    const componentPort = new Port({
      editor,
      component,
      name,
      position: position ?? placeholderPosition,
      connectedTo,
    });

    component.addPort(componentPort);

    if (connectedTo) {
      const boardPort = editor.board.getPort('D' + connectedTo);
      editor.wires.push(new Wire({
        editor,
        port: componentPort,
        destination: boardPort,
      }));
    }
  });

  return component;
}