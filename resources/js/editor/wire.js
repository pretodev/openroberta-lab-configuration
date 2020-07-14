import { svg } from './utils.js';
import Port from './port.js';

class Wire {
  constructor({ origin, destination }) {

    this.wireShadow = svg('path', {
      'fill': 'none',
      'stroke': '#3b8ed7',
      'stroke-width': 5,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'opacity': 0,
    });

    this.wire = svg('path', {
      'fill': 'none',
      'stroke': '#40B942',
      'stroke-width': 1.8,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    });

    this.element = svg('g');
    this.element.appendChild(this.wireShadow);
    this.element.appendChild(this.wire);

    this.drawPath = this.drawPath.bind(this);

    this.origin = origin;

    this.destination = destination;
  }

  get origin() {
    return this._origin;
  }

  set origin(port) {
    this._origin = port;

    if (this._destination)
      this.drawPath();

    if (port instanceof Port) {
      this._origin.addListener(this.drawPath);
    }
  }

  get destination() {
    return this._destination;
  }

  set destination(port) {
    this._destination = port;

    if (this._origin)
      this.drawPath();

    if (port instanceof Port) {
      this._destination.addListener(this.drawPath);
    }
  }

  drawPath() {
    const origin = this._origin.center;
    const dest = this._destination.center;

    const path = `M ${origin.x} ${origin.y} L ${dest.x} ${dest.y}`;

    this.wire.setAttribute('d', path);
    this.wireShadow.setAttribute('d', path);
  }

  dispose() {
    this.element.remove();
  }
}



export default Wire;