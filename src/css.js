const css = `
.port {
    cursor: default !important;
}
`;

export default function injectCSS(){
  const style = document.createElement('style');
  document.head.appendChild(style);
  style.textContent = css;
};