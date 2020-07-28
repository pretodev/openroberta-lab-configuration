/**
 * 
 * @param {string} robot 
 * @param {string} name 
 * @returns {array}
 */
function getFixedPortsByComponentName(robot, name) {
  const key = name.replace('robConf_', '');
  const { fixedPorts } = confBlocks[key][robot];
  return fixedPorts || [];
}

/**
 * 
 * @param {string} data 
 * @returns {object}
 */
export function configDecode(data) {
  const domParser = new DOMParser();
  const xmlConfig = domParser.parseFromString(data, "text/xml").querySelector('config');
  const robot = {};

  const robotElement = xmlConfig.querySelector('block_set');
  robot['name'] = robotElement.getAttribute('robottype');

  const components = {};
  const blocks = xmlConfig.querySelectorAll('instance');
  blocks.forEach((instance) => {
    const x = parseFloat(instance.getAttribute('x'));
    const y = parseFloat(instance.getAttribute('y'));

    const block = instance.querySelector('block');
    const id = block.getAttribute('id');
    const type = block.getAttribute('type');
    const name = block.querySelector('field[name=NAME]').innerHTML;

    const ports = [];
    block.querySelectorAll('field:not([name=NAME])').forEach(el => {
      const name = el.getAttribute('name');
      const pinStr = el.innerHTML.trim();
      ports.push({
        name,
        isFixed: false,
        connectedTo: { component: 'board', pin: pinStr === '' ? null : pinStr },
      });
    });

    const fixedPorts = getFixedPortsByComponentName(robot.name, type);
    fixedPorts.forEach(port => {
      ports.push({
        name: port[0],
        isFixed: true,
        connectedTo: { component: 'board', pin: port[1] },
      });
    });

    components[id] = { name, type, position: { x, y }, ports };
  });

  return { robot, components };
}

/**
 * 
 * @param {object} config 
 * @returns {string}
 */
export function configEncode({ board, components }) {
  let instances = '';
  for (let key in components) {
    const { name, position, ports, type } = components[key];
    instances += (`
      <instance x="${position.x}" y="${position.y}">
        <block type="${type}" id="${key}" intask="true">
          <field name="NAME">${name}</field>
          ${ports
        .filter(({ isFixed }) => !isFixed)
        .map(({ name, connectedTo }) => `<field name="${name}">${connectedTo?.pin ?? ''}</field>`).join('')
      }
        </block>
      </instance>
    `.trim());
  }

  return (`
    <config>
      <block_set xmlns="http://de.fhg.iais.roberta.blockly" robottype="${board.name}" xmlversion="2.0" description="" tags="">
        ${instances}
      </block_set>
    </config>
  `.trim());
}

export function blockDecode(block, robot) {
  const id = block.getAttribute('id');
  const type = block.getAttribute('type');
  const name = block.querySelector('field[name=NAME]').innerHTML;

  const ports = [];
  block.querySelectorAll('field:not([name=NAME])').forEach(el => {
    const name = el.getAttribute('name');
    const pinStr = el.innerHTML.trim();
    ports.push({
      name,
      isFixed: false,
      connectedTo: { component: 'board', pin: pinStr === '' ? null : pinStr },
    });
  });

  const fixedPorts = getFixedPortsByComponentName(robot, type);
  fixedPorts.forEach(port => {
    ports.push({
      name: port[0],
      isFixed: true,
      connectedTo: { component: 'board', pin: port[1] },
    });
  });

  return { id, name, type, ports };
}