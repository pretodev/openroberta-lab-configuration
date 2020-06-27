export function getSVG(path) {
  return new Promise((resolve) => {
    $.get(path, data => resolve(data.querySelector('g')), 'xml');
  });
}

export function getRelativeCenter(container, element) {
  const x = element.getBoundingClientRect().left + 3 - container.getBoundingClientRect().left;
  const y = element.getBoundingClientRect().top + 3 - container.getBoundingClientRect().top;
  return { x, y };
}

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