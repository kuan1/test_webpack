import _ from 'lodash';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.appendChild(btn);

  btn.innerHTML = '按钮';
  btn.onclick = print;

  return element;
}

document.body.appendChild(component());