import { getRelativeCenter, svg } from './utils.js';

export default function (editor) {
  const self_ = {};

  function drawWire(position) {
    const origin = getRelativeCenter(editor.container, self_.origin.element);
    const dest = position ?? getRelativeCenter(editor.container, self_.dest.element);
    self_.wire.setAttribute('d', `
      M ${origin.x} ${origin.y} 
      L ${dest.x - 1} ${dest.y - 1}
    `);
  }

  function startCreate(port) {
    self_.drawing = true;
    self_.origin = port;
    self_.wire = svg('path', {
      'fill': 'none',
      'stroke': '#40B942',
      'stroke-width': 1.8,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    });
    self_.wireGroup = svg('g');
    self_.wireGroup.appendChild(self_.wire);
    editor.container.appendChild(self_.wireGroup);
  }

  function finishCreate(port) {
    self_.drawing = false;
    self_.dest = port;
    drawWire();
    //TODO: add connection to editor
  }

  function setPort(port) {
    if (self_.drawing) {
      finishCreate(port);
      return;
    }
    startCreate(port);
  }

  document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape" && self_.drawing) {
      self_.wireGroup.remove();
      self_.drawing = false;
      self_.origin = null;
    }
  });

  editor.container.addEventListener('mousemove', (evt) => {
    if (self_.drawing) {
      const CTM = editor.container.getScreenCTM();
      const position = {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
      };
      drawWire(position);
    }
  });


  return { setPort };
}