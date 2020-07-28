import { configEncode, configDecode, blockDecode } from './convert.js';
import makeConnector from './wire_builder.js';
import makeComponent from './make_component.js';
import EditorContainer from './editor_container.js';
import Wire from './wire.js';
import { getRobot } from './circuit_elements'

export default class CircuitView {
  constructor(containerSelector) {

    this.container = new EditorContainer(containerSelector);

    this.robot = null;

    this.components = {};

    this.wires = [];

    this.selectedWire = null;

    this.container.svg.addEventListener('click', () => {
      if (this.selectedWire) {
        this.selectedWire = null;
        this.wires.forEach(wire => wire.unselect());
      }
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === "Escape" && this.selectedWire) {
        this.wires.forEach(wire => wire.unselect());
        this.selectedWire = null;
      } else if (evt.keyCode == 46) {
        this.selectedWire.dispose();
        this.wires = this.wires.filter(wire => wire.id !== this.selectedWire.id);
        this.selectedWire = null;
      }
    })

    const connector = makeConnector(this.container, (wire) => {
      wire.onClicked(this.wireClicked);
      this.wires.push(wire);
    });

    this.componentCreator = makeComponent({ container: this.container, connector });
  }

  addComponent = async (blockXml) => {
    const props = blockDecode(blockXml, this.robot._name);
    return this.showComponent({ ...props, position: { x: 30, y: 30 } });
  }

  removeComponentById = (id) => {
    const component = this.components[id];
    component.dispose();
    delete this.components[id];
  }

  showComponent = async (properties) => {
    const { id, component } = await this.componentCreator(properties);
    this.components[id] = component;
  };

  setRobot = async (props) => {
    const device = getRobot(props);
    const { component } = await this.componentCreator({
      id: 'board',
      position: { x: 230, y: 230 },
      ...device
    });
    this.robot = component;
  };

  wireClicked = (wire) => {
    this.wires.forEach(wire => wire.unselect());
    this.selectedWire = wire;
    this.selectedWire.select();
  }

  _loadWires = () => {
    for (let key in this.components) {
      const { ports } = this.components[key];
      ports.forEach(port => {
        if (port.connectedTo) {
          const { component, pin } = port.connectedTo;
          const destComponent = component === 'board' ? this.robot : this.components[component];
          const destPort = destComponent.getPort(pin);
          const wire = new Wire({ origin: port, destination: destPort });
          wire.onClicked(this.wireClicked);
          this.container.addWire(wire);
          this.wires.push(wire);
        }
      })
    }
  }

  async load(file) {
    // read configurations
    const { robot, components } = configDecode(file);

    // create robot board
    await this.setRobot(robot);

    // create components
    for (let id in components) {
      const properties = components[id];
      await this.showComponent({ id, ...properties });
    }

    this._loadWires();
  }

  get xml() {
    //return { components: this.components };
    return configEncode({
      board: this.robot,
      components: this.components,
    });
  }
}