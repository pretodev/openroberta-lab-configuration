import ChangeNotifier from './change_notifier.js';

class Component extends ChangeNotifier {
  constructor({ editor, element, name, position }) {
    super();
    this.editor = editor;

    this.name = name;

    this.position = position;

    this.ports = [];

    this.element = element;

    this.element.setAttribute('transform', `translate(${position.x}, ${position.y})`);

    editor.container.appendChild(this.element);

    const draggable = new PlainDraggable(this.element);

    draggable.onMove = (_) => this.notifyListeners();
  }

  addPort(port) {
    this.ports.push(port);
  }
}

export default Component;