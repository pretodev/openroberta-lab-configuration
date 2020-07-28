import 'regenerator-runtime/runtime';

import Editor from './editor.js'
import injectCSS from './styles/inject_css.js';

export default function(selector) {
  injectCSS();
  
  const editor = new Editor(selector);

  return editor;
}