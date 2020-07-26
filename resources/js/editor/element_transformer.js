class ElementTransformer {
  /**
   * @param {SVGElement} element 
   */
  constructor(element) {
    this._element = element;

    const values =  this._values();
    this._x = values[0];
    this._y = values[1];
    this._rotate = values[2] ?? 0;
    this._scale = values[3] ?? 1;
    this._transform();
  }

  _values = () => this._element
    .getAttribute('transform')
    .match(/[+-]?\d+(\.\d+)?/g)
    .map((value) => parseFloat(value))

  get position() {
    return { x: this._x, y: this._y };
  }

  /**
   * @param {double} x
   * @param {double} y
   */
  set position({ x, y }) {
    this._x = x;
    this._y = y;
    this._transform();
  }

  get scale() {
    return this._scale;
  }

  /**
   * @param {double} scale
   */
  set scale(scale) {
    this._scale = scale;
    this._transform();
  }

  get rotate() {
    return this._rotate;
  }

  /**
   * @param {double} rotate
   */
  set rotate(rotate) {
    this._rotate = rotate;
    this._transform();
  }

  _transform = () => {
    this._element.setAttribute('transform', `translate(${this._x}, ${this._y}) rotate(${this._rotate}) scale(${this._scale}, ${this._scale})`);
  }
}

export default ElementTransformer;