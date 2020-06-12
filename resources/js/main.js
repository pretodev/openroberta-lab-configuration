function makeProgramSVG() {
  const robotBoards = {
    'arduino': 'arduino',
  };

  return {
    getByRobot(robot) {
      return robotBoards[robot] + '.svg';
    }
  };

}


function makeConfigurationPanel(programSVG) {
  const $xmlFileInput = $('#xmlFileInput');
  const parser = new DOMParser();

  let draw;
  let xmlConfigFile;

  function onLoadedBoard(data) {
    const fileContent = data.getElementsByTagName('svg')[0].outerHTML;
    draw.svg(fileContent);
  }

  function loadBoard() {
    const boardEl = xmlConfigFile.getElementsByTagName('block_set')[1];
    const robotName = boardEl.getAttribute('robottype');
    const svgRobotFileName = programSVG.getByRobot(robotName);
    $.get('/resources/svg/' + svgRobotFileName, onLoadedBoard, 'xml');
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