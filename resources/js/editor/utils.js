export function getSVG(path) {
  return new Promise((resolve) => {
    $.get(path, data => resolve(data.querySelector('g')), 'xml');
  });
}

export function getPositionRelative(element) {
  const container = document.querySelector('svg');
  const x = element.getBoundingClientRect().left - container.getBoundingClientRect().left;
  const y = element.getBoundingClientRect().top - container.getBoundingClientRect().top;
  return { x, y };
}


/**
 * Create a new svg element
 * @param {string} name 
 * @param {Object<string, any>}} attrs
 * @returns {SVGElement}
 */
export function svg(name, attrs) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  if (attrs) {
    for (let attrName in attrs) {
      const value = attrs[attrName];
      element.setAttribute(attrName, value);
    }
  }
  return element;
}
