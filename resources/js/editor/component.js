import ChangeNotifier from './change_notifier.js';
import { getPositionRelative } from './utils.js';

class Component extends ChangeNotifier {
  constructor({ id, element, name, type }) {
    super();

    this.id = id;

    this.element = element;

    this.name = name;

    this.type = type;

    this.ports = [];
  }

  get position() {

    const transforms = this.element.transform.baseVal;
    const transform = transforms.getItem(0);

    return { x: transform.matrix.e, y: transform.matrix.f };
  }

  addPort(port){
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