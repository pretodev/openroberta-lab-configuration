import Wire from './wire.js';

function connector(container, onCreated) {

  let currentWire;

  let connecting = false;

  document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape" && connecting) {
      currentWire?.dispose();
      connecting = false;
    }
  });

  document.addEventListener('mousemove', (evt) => {
    if (connecting) {
      const CTM = container.wiresContainer.parentNode.getScreenCTM();
      currentWire.destination = {
        center: {
          x: (evt.clientX - CTM.e) / CTM.a,
          y: (evt.clientY - CTM.f) / CTM.d,
        },
      };
    }
  });

  return function (port) {

    if (!connecting) {
      currentWire = new Wire({ origin: port, destination: { center: port.center } });

      container.wiresContainer.appendChild(currentWire.element);

      connecting = true;

      return;
    }

    currentWire.destination = port;

    onCreated(currentWire);

    connecting = false;
  }

};


export default connector;