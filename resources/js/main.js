import createEditor from './editor/editor.js';

const editor = createEditor();

async function start() {
  bsCustomFileInput.init();
  editor.init('.container-canva');

  document.querySelector('#xmlFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      await editor.load(file);
    }
  });
}

document.addEventListener('DOMContentLoaded', start);