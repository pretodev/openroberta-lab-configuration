const state = createState();
const parser = createParser();

async function start() {
  bsCustomFileInput.init();

  state.subscribe((value) => {
    console.log(value);
  })

  document.querySelector('#xmlFileInput').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      const props = await parser.parse(file);
      state.setValue(props);
    }
  });
}

document.addEventListener('DOMContentLoaded', start);