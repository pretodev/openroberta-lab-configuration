import ChangeNotifier from './change_notifier.js';

class Component extends ChangeNotifier {
  constructor({ id, element, name, position, type }) {
    super();

    this.id = id;

    this.element = element;

    this.name = name;

    this.position = position;

    this.type = type;

    this.ports = [];
  }

  addPort(port) {
    this.element.appendChild(port.element);

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