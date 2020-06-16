function makeComponent(canva, { name, x, y }) {
  function svgPath(fileName) {
    return '/resources/svg/' + fileName + '.svg';
  }

  function render(xmlData) {
    const componentSvg = xmlData.querySelector('g');
    componentSvg.classList.add('component');
    componentSvg.setAttribute('transform', `translate(${x}, ${y}) rotate(0) scale(1,1)`);
    canva.appendChild(componentSvg);
  }

  function show() {
    const path = svgPath(name);
    $.get(path, render, 'xml');
  }

  return {
    show
  };
}

function makeConfigurationPanel() {
  const xmlFileInput = document.querySelector('#xmlFileInput');
  const canva = document.querySelector('svg');
  const parser = new DOMParser();

  let xmlConfig;

  let board, components = {};

  function loadBoard() {
    const robotElement = xmlConfig.querySelector('block_set');
    const robotName = robotElement.getAttribute('robottype');
    // arduino hete
    board = makeComponent(canva, { name: robotName, x: 100, y: 300 });
    board.show();
  }

  function loadComponents() {
    const blocks = xmlConfig.querySelectorAll('instance');
    blocks.forEach((instance, i) => {
      const block = instance.querySelector('block');
      const x = instance.getAttribute('x');
      const y = instance.getAttribute('y');
      const type = block.getAttribute('type');
      const name = type.replace('robConf_', ''); // TODO: create mapper
      const component = makeComponent(canva, { name, x, y });
      component.show();
      components['elem' + i] = component;
    });
  }

  function loadXml(xmlFile) {
    const reader = new FileReader();
    reader.onloadend = e => {
      const text = e.target.result;
      const data = parser.parseFromString(text, "text/xml");
      xmlConfig = data.querySelector('config');
      loadBoard();
      loadComponents();
    }
    reader.readAsText(xmlFile);
  }

  function onInit() {
    xmlFileInput.addEventListener('change', e => loadXml(e.target.files[0]));
  }

  return {
    init: onInit
  }
}



document.addEventListener('DOMContentLoaded', function () {
  bsCustomFileInput.init();
  const panel = makeConfigurationPanel();
  panel.init();
})