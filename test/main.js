'use strict';

let workspace, confVis;

const xml = `
<block_set xmlns="http://de.fhg.iais.roberta.blockly" robottype="arduino" xmlversion="2.0" description="" tags="">
  <instance x="138" y="88">
      <block type="robConf_led" id="1" intask="true">
          <field name="NAME">L</field>
          <field name="INPUT">LED_BUILTIN</field>
      </block>
  </instance>
</block_set>
`;

function start() {

  const device = { group: 'arduino', robot: 'uno' };

  const selectRobot = document.getElementById('selectRobot');
  const btnRefresh = document.getElementById('btnRefresh');

  selectRobot.addEventListener('change', (evt) => {
    const value = evt.target.value;
    device['robot'] = value;
    workspace.setDevice(device);
    confVis.resetRobot();
  });

  btnRefresh.addEventListener('click', () => {
    confVis.refresh();
  })

  const toolbox = document.getElementById('toolbox-Configuration');
  const media = 'blockly/media/';


  workspace = Blockly.inject('blocklyDiv', { media, toolbox });
  workspace.setDevice(device);

  const dom = Blockly.Xml.textToDom(xml, workspace);
  confVis = CircuitVisualization.domToWorkspace(dom, workspace);
}