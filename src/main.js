import 'regenerator-runtime/runtime';

import Editor from './editor.js'

export default function(selector) {
  const editor = new Editor(selector);

  return editor;
}