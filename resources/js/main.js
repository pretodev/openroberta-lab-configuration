function makeProgramSVG() {
  const robotBoards = {
    'arduino': 'arduino',
  };

  function loadSVG(fileName, onSuccess) {
    $.get('/resources/svg/' + fileName + '.svg', (data) => {
      onSuccess(data.getElementsByTagName('svg')[0].outerHTML);
    }, 'xml');
  }

  return {
    getByRobot(robot, onSuccess) {
      return loadSVG(robotBoards[robot], onSuccess);
    }
  };

}


function makeConfigurationPanel(programSVG) {
  const $xmlFileInput = $('#xmlFileInput');
  const parser = new DOMParser();

  let draw;
  let xmlConfigFile;

  function loadBoard() {
    const boardEl = xmlConfigFile.getElementsByTagName('block_set')[1];
    const robotName = boardEl.getAttribute('robottype');
    programSVG.getByRobot(robotName, (svgFile) => {
      draw.svg(svgFile);
    });
  }

  function loadXml(xmlFile) {
    const reader = new FileReader();
    reader.onloadend = e => {
      const text = e.target.result;
      xmlConfigFile = parser.parseFromString(text, "text/xml");
      loadBoard();
    }
    reader.readAsText(xmlFile);
  }

  function onStart() {
    draw = SVG().addTo('#configurationContainer').size(540, 540);
    $xmlFileInput.change((e) => loadXml(e.target.files[0]));
  }

  return {
    start: onStart
  }
}

$(document).ready(() => {
  bsCustomFileInput.init();
  const programSVG = makeProgramSVG();
  const panel = makeConfigurationPanel(programSVG);
  panel.start();
});