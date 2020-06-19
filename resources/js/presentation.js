function svgPath(fileName) {
  return '/resources/svg/' + fileName + '.svg';
}

/**
 * @param {Object} properties
 * @param {string} properties.name 
 * @param {string} properties.svgPath 
 * @param {number} properties.x 
 * @param {numer} properties.y 
 * @param {Object} properties.ports 
 */
function makeComponent({ name, svgPath, x, y, ports = {} }) {
  let container;
  let rootElement;

  function renderPorts() {
    for (let port in ports) {
      const props = ports[port];
      const portSvg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      portSvg.setAttribute('id', name.toLowerCase() + '_port_' + port.toLowerCase());
      portSvg.setAttribute('x', props.x);
      portSvg.setAttribute('y', props.y);
      portSvg.setAttribute('width', 5);
      portSvg.setAttribute('height', 5);
      portSvg.setAttribute('fill', 'red');
      portSvg.setAttribute('stroke', 'black');
      portSvg.setAttribute('stroke-width', 1);
      rootElement.appendChild(portSvg);
    };
  }

  function renderComponent(svg) {
    rootElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    rootElement.classList.add('component');
    rootElement.setAttribute('transform', `translate(${x}, ${y}) rotate(0) scale(1,1)`);
    rootElement.appendChild(svg);
    container.appendChild(rootElement);
  }

  function onSvgLoaded(svg) {
    renderComponent(svg);
    renderPorts();
  }

  function generateDefaultComponent() {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('height', '100%');
    rect.setAttribute('width', '100%');
    rect.setAttribute('fill', 'lightgrey');

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', '50%');
    label.setAttribute('y', '50%');
    label.setAttribute('dominant-baseline', 'middle');
    label.setAttribute('text-anchor', 'middle');
    label.innerHTML = name;

    const element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    element.setAttribute('height', 50);
    element.setAttribute('width', 100);
    element.appendChild(rect);
    element.appendChild(label);
    onSvgLoaded(element)
  }

  function build(canva) {
    container = canva;
    if (svgPath) {
      $.get(svgPath, data => onSvgLoaded(data.querySelector('g')), 'xml');
    } else {
      generateDefaultComponent();
    }
  }

  return { build };
}