import 'regenerator-runtime/runtime';

import CircuitView from './circuit_view.js'
import injectCSS from './styles/inject_css.js';

export default function(selector, robot) {
  injectCSS();
  
  const view = new CircuitView(selector);

  view.setRobot(robot);

  return view;
}