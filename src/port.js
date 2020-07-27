import { svg } from './utils.js';
import ChangeNotifier from './change_notifier.js';

class Port extends ChangeNotifier {
  constructor({ name, position, connectedTo, isFixed, onClick, component}) {
    super();

    this.name = name;

    this.isFixed = isFixed;

    this.component = component;

    this._position = position;

    this.connectedTo = connectedTo;

    this.element = svg('rect', {
      'width': 5,
      'height': 5,
      'fill': 'red',
      'stroke': 'black',
      'stroke-width': 1,
      'x': position.x,
      'y': position.y,
      'r': 3,
      'opacity': 0,
    });

    this.element.addEventListener('click', () => onClick(this));

    this.element.addEventListener('mouseover', () => this.element.setAttribute('opacity', '1'));

    this.element.addEventListener('mouseout', () => this.element.setAttribute('opacity', '0'));

    //TODO: refactor to use vanilla js
    //$(this.element).popover({ content: name, trigger: 'hover', placement: 'bottom' });
  }

  get center() {
    return {
      x: this._position.x + 2.5,
      y: this._position.y + 2.5,
    };
  }

  set position(position) {
    this._position = position;
    this.element.setAttribute('x', position.x);
    this.element.setAttribute('y', position.y);
  }

  get position() {
    return this._position;
  }

}

export default Port;
