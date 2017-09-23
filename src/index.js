import _ from 'lodash';
import print from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.appendChild(btn);

  btn.innerHTML = '按钮';
  btn.onclick = print;

  return element;
}
if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accept the updated print module!');
    print();
  })
}
document.body.appendChild(component());