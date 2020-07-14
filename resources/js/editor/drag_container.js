class DragContainer {
  constructor(container) {
    this.container = container;

    this.element = null;

    this.offset = {};

    this.transform = null;

    this.onMoved = null

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
        const coords = this.mousePosition(evt);
        this.transform.setTranslate(coords.x - this.offset.x, coords.y - this.offset.y);

        if (this.onMoved) this.onMoved();
      }
    });

    const endDrag = () => {
      this.element = null;
    }

    this.container.addEventListener('mouseup', endDrag);
    this.container.addEventListener('mouseleave', endDrag);
  }

  bindElement(element, onMoved) {
    element.addEventListener('mousedown', (evt) => {
      if (element.classList.contains('draggable')) {
        this.element = element;
        this.onMoved = onMoved;
        
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