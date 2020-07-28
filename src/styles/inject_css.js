const css = `
.draggable {
  cursor: default !important;
}

.draggable text {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: inherit;
}
`;

export default function injectCss(){
  const style = document.createElement('style');
  document.head.appendChild(style);
  style.textContent = css;
};