import Wire from './wire.js';

class WireCreator {
  constructor(editor) {

    this.editor = editor;

    this.drawing = false;

    this.dest = {};

    this.wire;

    document.addEventListener('keydown', (evt) => {
      if (evt.key === "Escape" && this.drawing) {
        this.wire?.dispose();
        this.drawing = false;
      }
    });

    editor.container.addEventListener('mousemove', (evt) => {
      if (this.drawing) {
        const CTM = editor.container.getScreenCTM();
        this.dest.positionAbsolute = {
          x: (evt.clientX - CTM.e) / CTM.a - 1,
          y: (evt.clientY - CTM.f) / CTM.d - 1,
        };
        this.wire.refresh();
      }
    });
  }
  create(port) {

    if (!this.drawing) {

      this.dest.positionAbsolute = port.positionAbsolute;

      this.wire = new Wire({ editor: this.editor, port });

      this.wire.destination = this.dest;

      this.drawing = true;
    }
    else {
      this.drawing = false;
      this.wire.destination = port;
      this.wire.refresh();

      this.editor.wires.push(this.wire);
    }
  }
}


export default WireCreator;