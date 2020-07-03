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
        this.dest.center = {
          x: (evt.clientX - CTM.e) / CTM.a - 2,
          y: (evt.clientY - CTM.f) / CTM.d - 2,
        };
        this.wire.refresh();
      }
    });
  }
  create(port) {

    if (!this.drawing) {

      this.dest.center = port.center;

      this.wire = new Wire({ editor: this.editor, origin: port });

      this.wire.destination = this.dest;

      this.drawing = true;
    }
    else {
      this.drawing = false;
      this.wire.destination = port;
      this.wire.refresh();

      if (this.wire.origin.component.type === 'robot_board') {
        this.wire.destination.connectedTo = this.wire.origin.name;
      } else if (this.wire.destination.component.type === 'robot_board') {
        this.wire.origin.connectedTo = this.wire.destination.name;
      }

      console.log(this.wire.origin.name, this.wire.origin.connectedTo);
      console.log(this.wire.destination.name, this.wire.destination.connectedTo);

      this.editor.wires.push(this.wire);
    }
  }
}


export default WireCreator;