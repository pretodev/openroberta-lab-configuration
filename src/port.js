import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default class Port {
  constructor(parent, name, position) {
    this.position_ = position;

    this.element_ = Blockly.createSvgElement('rect', {
      'class': 'port',
      'width': 5,
      'height': 5,
      'fill': 'red',
      'stroke': 'black',
      'stroke-width': 1,
      'transform': `translate(${position.x}, ${position.y})`,
      'r': 3,
    }, parent);

    tippy(this.element_, {
      content: name,
    });
  }

  moveTo(position) {
    this.position_ = position;
    this.element_.setAttribute('transform', `translate(${position.x}, ${position.y})`);
  }

  get element(){
    return this.element_;
  }

  get position() {
    return this.position_;
  }
}
