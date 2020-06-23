function createParser() {
  const domParser = new DOMParser();

  function parseBoard(xmlConfig) {
    const robotElement = xmlConfig.querySelector('block_set');
    const board = robotElement.getAttribute('robottype');
    return { name: board };
  }

  function parseComponents(xmlConfig) {
    const components = {};
    const blocks = xmlConfig.querySelectorAll('instance');
    blocks.forEach((instance) => {
      const block = instance.querySelector('block');
      const x = instance.getAttribute('x');
      const y = instance.getAttribute('y');
      const type = block.getAttribute('type').replace('robConf_', '');
      const componentName = block.querySelector('field[name=NAME]').innerHTML;

      const ports = [];
      block.querySelectorAll('field:not([name=NAME])').forEach(el => {
        const name = el.getAttribute('name');
        const value = el.innerHTML;
        ports.push({ name, value });
      });

      components[componentName] = { type, position: { x, y }, ports };
    });

    return components;
  }

  function parse(configFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = e => {
        const text = e.target.result;
        const data = domParser.parseFromString(text, "text/xml");
        const xmlConfig = data.querySelector('config');
        const board = parseBoard(xmlConfig);
        const components = parseComponents(xmlConfig);
        resolve({ board, components });
      }
      reader.onerror = e => reject(e);
      reader.readAsText(configFile);
    });
  }

  return { parse };
}