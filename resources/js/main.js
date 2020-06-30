import Editor from './editor/editor.js';



async function start() {
  bsCustomFileInput.init();
  const editor = new Editor('.container-canva');

  document.querySelector('#xmlFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      await editor.load(file);
    }
  });
}

document.addEventListener('DOMContentLoaded', start);