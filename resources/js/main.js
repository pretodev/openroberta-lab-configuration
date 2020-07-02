import Editor from './editor/editor.js';



async function start() {
  bsCustomFileInput.init();
  const editor = new Editor('.container-canva');

  document.querySelector('#xmlFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = evt => editor.load(evt.target.result);
      reader.onerror = error => reject(error);
      reader.readAsText(file);
    }
  });

  document.querySelector('#bntExport').addEventListener('click', () => {
    const xml = `<export xmlns="http://de.fhg.iais.roberta.blockly">${editor.xml}</export>`;
    const blob = new Blob(xml.split('\n'), { type: "text/xml;charset=utf-8" });
    saveAs(blob, "robConfiguration.xml")
  });
}

document.addEventListener('DOMContentLoaded', start);