import keyboardElementEn from './keyboardElementEn.js';
import keyboardElementRu from './keyboardElementRu.js';
import elementSequence from './elementSequence.js';
// create buttons of keyboard for wrapper
let onloadKeybord = function onload(){
  function fillKeyboardWrapper() {
    let content = '';
    for (let i=0; i<elementSequence.length; i++) {
        for (let element of keyboardElementEn) {
            if (element.code === elementSequence[i]) {
              // check if the element contains a class
              if (element.class) {
                content += `<div class="key_btn ${element.class}">`+element.symbol+'</div>'
              } else {
                content += '<div class="key_btn">'+element.symbol+'</div>'
              }
            }
        }   
    }
    return content;
  }
  let content = fillKeyboardWrapper();
  // create page body
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML='<div class="container"><h1>Microsoft Windows virtual keyboard</h1></div>';
  const main = document.createElement('main');
  main.innerHTML = `<div class="container"><textarea class="textarea"></textarea><p class="switch-language">Press Shift-left + Ctrl-left to change language</p><div class="keyboard__wrapper">${content}</div></div>`;
  document.body.append(header);
  document.body.append(main);
};
export default onloadKeybord;