import ChangeNotifier from './change_notifier.js';
import { getPositionRelative } from './utils.js';

class Component extends ChangeNotifier {
  constructor({ editor, element, name, position, type }) {
    super();
    this.editor = editor;

    this.name = name;

    this.position = position;

    this.type = type;

    this.ports = [];

    this.element = element;

    this.element.setAttribute('transform', `translate(${position.x}, ${position.y})`);

    editor.container.appendChild(this.element);

    const draggable = new PlainDraggable(this.element);

    draggable.onMove = (_) => {
      this.position = getPositionRelative(this.editor.container, this.element);
      this.notifyListeners();
    };
  }

  addPort(port) {
    this.ports.push(port);
  }

  getPort(name) {
    const index = this.ports.findIndex((port) => port.name == name);
    if (index > -1) {
      return this.ports[index];
    }
  }
}

export default Component;