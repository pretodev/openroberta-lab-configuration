import { svg } from './utils.js';

export default function (editor, component, { name, position }) {
  const self_ = {};
  self_.element = svg('rect', {
    'width': 5,
    'height': 5,
    'fill': 'red',
    'stroke': 'black',
    'stroke-width': 1,
    'x': position.x,
    'y': position.y,
    'r': 3
  });
  self_.element.addEventListener('mousedown', () => editor.wireBuilder.setPort(self_));

  // TODO: transform in vanilla js
  $(self_.element).popover({ content: name, trigger: 'hover', placement: 'bottom' });
  component.element.appendChild(self_.element);
  return self_;
}