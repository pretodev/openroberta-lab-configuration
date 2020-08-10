import _ from 'lodash';

class WirePoint {
  constructor(position) {
    this.position_ = position;
    this.next = null;
  }

  get position() {
    return this.position_;
  }
}

export default class WireDrawer {
  constructor(origin, destination) {
    this.head_ = new WirePoint(origin);
    this.head_.next = new WirePoint(destination);
    this.toOrthoLines_();
  }

  addPoint_(prevPoint, position) {
    const newPoint = new WirePoint(position);
    newPoint.next = prevPoint.next;
    prevPoint.next = newPoint;
  }

  toOrthoLines_() {
    const { x: x1, y: y1 } = this.head_.position;
    const { x: x2, y: y2 } = this.head_.next.position;

    if(x1 === x2 || y1 === y2)
      return;

    const x = x1 < x2 ? _.max([x1, x2]) : _.min([x1, x2]);
    const y = y1 < y2 ? _.min([y1, y2]) : _.max([y1, y2]);

    this.addPoint_(this.head_, {x, y});

    console.log({x, y}, {x1, y1}, {x2, y2});
  }

  get path() {
    const moveto = this.head_.position;
    let path = `M ${moveto.x} ${moveto.y}`;

    let current = this.head_.next;
    while (current !== null) {
      const lineto = current.position;
      path = `${path} L ${lineto.x} ${lineto.y}`;
      current = current.next;
    }

    return path;
  }
}