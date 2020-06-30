import { svg } from './utils.js';
import Port from './port.js';

class Wire {
  constructor({ editor, port }) {
    this.editor = editor;

    this.origin = port;

    this.element = svg('path', {
      'fill': 'none',
      'stroke': '#40B942',
      'stroke-width': 1.8,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    });

    editor.container.appendChild(this.element);
  }

  set destination(port) {
    this.dest = port;

    if (port instanceof Port) {
      const refresh = this.refresh.bind(this);
      this.origin.addListener(refresh);
      this.dest.addListener(refresh);
    }
  }

  refresh() {
    const origin = this.origin.positionAbsolute;
    const dest = this.dest.positionAbsolute;
    this.element.setAttribute('d', `
      M ${origin.x} ${origin.y} 
      L ${dest.x} ${dest.y}
    `);
  }

  dispose() {
    this.element.remove();
  }
}



export default Wire;