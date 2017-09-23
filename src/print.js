export default function print() {
  let element = document.createElement('div');
  element.innerHTML = '文件发生改变234';

  document.body.appendChild(element);
}
