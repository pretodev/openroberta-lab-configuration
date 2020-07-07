class DragContainer {
  constructor(container) {
    this.container = container;

    this.element = null;

    this.offset = {};

    this.transform = null;

    this.mousePosition = (evt) => {
      var CTM = container.getScreenCTM();
      return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
      };
    }

    this.bindEvents();
  }

  bindEvents() {
    this.container.addEventListener('mousemove', (evt) => {
      if (this.element) {
        evt.preventDefault();
        const coord = this.mousePosition(evt);
        this.transform.setTranslate(coord.x - this.offset.x, coord.y - this.offset.y);
      }
    });

    const endDrag = () => {
      this.element = null;
    }

    this.container.addEventListener('mouseup', endDrag);
    this.container.addEventListener('mouseleave', endDrag);
  }

  bindElement(element) {
    element.addEventListener('mousedown', (evt) => {
      if (element.classList.contains('draggable')) {
        this.element = element;

        const transforms = this.element.transform.baseVal;
        this.transform = transforms.getItem(0);

        this.offset = this.mousePosition(evt);
        this.offset.x -= this.transform.matrix.e;
        this.offset.y -= this.transform.matrix.f;
      }
    });
  }

}

export default DragContainer;