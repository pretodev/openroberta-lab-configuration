import ChangeNotifier from './change_notifier.js';
import { svg } from './utils.js';
import ElementTransformer from './element_transformer.js';

class EditorContainer extends ChangeNotifier {
  /**
   * @param {string} selector 
   */
  constructor(selector) {
    super();

    this._scale = 1;

    this._currentElement = null;

    this._isElement = false;

    this.offset = {};

    this.componentsContainer = svg('g');

    this.wiresContainer = svg('g');

    this.portsContainer = svg('g');

    const wrapper = svg('g', {
      'transform': `scale(${this._scale}, ${this._scale})`,
    });

    wrapper.appendChild(this.componentsContainer);
    wrapper.appendChild(this.wiresContainer);
    wrapper.appendChild(this.portsContainer);

    this.svg = svg('svg', {
      'xmlns': 'http://www.w3.org/2000/svg',
      'version': '1.1',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      'width': '100%',
      'height': '100%',
    });

    this.svg.appendChild(wrapper);

    this.wrapper = new ElementTransformer(wrapper);

    document.querySelector(selector).appendChild(this.svg);

    this._bindEvents();
  }


  /**
   * @param {SVGElement} element
   */
  set currentElement(element) {
    if (element) {
      this._currentElement = new ElementTransformer(element);
    } else {
      this._currentElement = null;
    }
  }

  get currentElement() {
    return this._currentElement;
  }

  _mousePosition = (evt) => {
    const CTM = this.svg.getScreenCTM();
    return {
      x: (evt.clientX - CTM.e) / CTM.a,
      y: (evt.clientY - CTM.f) / CTM.d
    };
  }

  _bindEvents = () => {
    this.svg.addEventListener('mousemove', (evt) => {
      if (this.currentElement) {
        evt.preventDefault();
        const coords = this._mousePosition(evt);
        this.currentElement.position = { x: coords.x - this.offset.x, y: coords.y - this.offset.y };
        this.notifyListeners();
      }
    });

    this.svg.addEventListener('mousedown', (evt) => {
      if (!this._isElement) {
        this._currentElement = this.wrapper;
        this.offset = this._mousePosition(evt);
        this.offset.x -= this.currentElement.position.x;
        this.offset.y -= this.currentElement.position.y;
      }
    });

    this.svg.addEventListener('wheel', (event) => {
      event.preventDefault();
      this._scale += event.deltaY * -0.01;
      this._scale = Math.min(Math.max(.125, this._scale), 4);
      this.wrapper.scale = this._scale;
      this.notifyListeners();
    });

    const endDrag = () => {
      this.currentElement = null;
      this._isElement = false;
    }

    this.svg.addEventListener('mouseup', endDrag);
    this.svg.addEventListener('mouseleave', endDrag);
  }

  addComponent(component) {
    const { element } = component;
    this.componentsContainer.appendChild(element);

    element.addEventListener('mousedown', (evt) => {
      this._isElement = true;
      this.currentElement = element;
      this.offset = this._mousePosition(evt);
      this.offset.x -= this.currentElement.position.x;
      this.offset.y -= this.currentElement.position.y;
    });

    this.addListener(() => {
      component.notifyListeners();
    });
  }

  addWire(wire) {
    const { element } = wire;
    this.wiresContainer.appendChild(element);
    this.addListener(() => {
      wire.drawPath();
    });
  }


}

export default EditorContainer;