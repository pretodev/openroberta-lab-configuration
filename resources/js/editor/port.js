import { svg, getRelativeCenter } from './utils.js';
import ChangeNotifier from './change_notifier.js';

class Port extends ChangeNotifier {
  constructor({ editor, component, name, position }) {
    super();

    this.editor = editor;

    this.name = name;

    this.component = component;

    this.position = position;

    this.element = svg('rect', {
      'width': 5,
      'height': 5,
      'fill': 'red',
      'stroke': 'black',
      'stroke-width': 1,
      'x': position.x,
      'y': position.y,
      'r': 3
    });

    this.element.addEventListener('mousedown', () => editor.wire.create(this));

    component.element.appendChild(this.element);

    $(this.element).popover({ content: name, trigger: 'hover', placement: 'bottom' });

    component.addListener(() => {
      this.notifyListeners();
    });
  }

  get positionAbsolute() {
    return getRelativeCenter(this.editor.container, this.element);
  }

}

export default Port;