import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export function createPortSvg(parent, name, position) {
  const portSvg = Blockly.createSvgElement('rect', {
    'class': 'port',
    'width': 5,
    'height': 5,
    'fill': 'red',
    'stroke': 'black',
    'stroke-width': 1,
    'x': position.x,
    'y': position.y,
    'r': 3,
  }, parent);

  tippy(portSvg, {
    content: name,
  });

  return portSvg;
}
