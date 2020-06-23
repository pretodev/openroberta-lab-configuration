function createBoard({ name }) {

  function svgPath(fileName) {
    return '/resources/svg/boards/' + fileName + '.svg';
  }

  return new Promise((resolve) => {
    const path = svgPath(name);
    $.get(path, data => {
      const element = data.querySelector('g');
      element.setAttribute('transform', 'translate(230, 230)');
      element.classList.add('draggable');
      resolve({
        el: element,
      });
    }, 'xml');
  });

}

function createComponent(canva, { name, position, ports }) {

  let selected_ = false;
  let position_ = position;
  let offset;

  function getMousePosition(evt) {
    var CTM = canva.getScreenCTM();
    return {
      x: (evt.clientX - CTM.e) / CTM.a,
      y: (evt.clientY - CTM.f) / CTM.d
    };
  }

  function startDrag(evt) {
    selected_ = true;
    offset = getMousePosition(evt);
    offset.x -= position_.x;
    offset.y -= position_.y;
  }

  function drag(evt) {
    if (selected_) {
      evt.preventDefault();
      const { x, y } = getMousePosition(evt);
      element.setAttribute('transform', `translate(${x - offset.x}, ${y - offset.y})`);
      position_ = { x, y };
    }
  }

  function endDrag() {
    selected_ = false;
  }

  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  rect.setAttribute('fill', 'lightgrey');
  rect.setAttribute('d', 'm0,2 H 150 v 50 H 0 z');

  const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  label.setAttribute('transform', 'translate(75, 25)');
  label.setAttribute('dominant-baseline', 'middle');
  label.setAttribute('text-anchor', 'middle');
  label.innerHTML = name;

  const element = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  element.setAttribute('transform', `translate(${position.x}, ${position.y})`);
  element.classList.add('draggable');
  element.appendChild(rect);
  element.appendChild(label);

  element.addEventListener('mousedown', startDrag);
  element.addEventListener('mousemove', drag);
  element.addEventListener('mouseup', endDrag);
  element.addEventListener('mouseleave', endDrag);

  console.log(ports);

  const portSize = 150 / ports.length;
  ports.forEach(({ name }) => {
    const point = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    point.setAttribute('width', 5);
    point.setAttribute('height', 5);
    point.setAttribute('fill', 'red');
    point.setAttribute('stroke', 'black');
    point.setAttribute('stroke-width', 1);
    point.setAttribute('transform', `translate(${portSize / 2}, 40)`);
    point.setAttribute('r', `3`);
    $(point).popover({ content: name, trigger: 'hover', placement: 'bottom' });
    element.appendChild(point);
  });

  return element;
}

function createConfigurationView() {
  const self = this;
  const rootElement = document.querySelector('svg');

  async function showBoard() {
    const board = await createBoard(self.config.board);
    rootElement.appendChild(board.el);
  }

  function showComponents() {
    for (let name in self.config.components) {
      const properties = self.config.components[name];
      const component = createComponent(rootElement, { name, ...properties });
      rootElement.appendChild(component);
    }
  }

  async function show(config) {
    self.config = config;
    await showBoard();
    showComponents();
  }

  return {
    show,
  }

}
