import keyboardElementEn from './keyboardElementEn.js';
import keyboardElementRu from './keyboardElementRu.js';
import elementSequence from './elementSequence.js';
// создание кнопок клавиатуры для wrapper
let onloadKeybord = function onload(){
  function fillKeyboardWrapper() {
    let content = '';
    for (let i=0; i<elementSequence.length; i++) {
      if (localStorage.getItem('language') === 'en') {
        for (let element of keyboardElementEn) {
          if (element.code === elementSequence[i]) {
            // проверем, есть ли у кнопки дополнительный класс для добавления его
            if (element.class) {
              content += `<div class="key_btn ${element.class}" id="${element.code}">`+element.symbol+'</div>'
            } else {
              content += `<div class="key_btn" id="${element.code}">`+element.symbol+'</div>'
            }
          }
        } 
      } else {
        for (let element of keyboardElementRu) {
          if (element.code === elementSequence[i]) {
            // проверем, есть ли у кнопки дополнительный класс для добавления его
            if (element.class) {
              content += `<div class="key_btn ${element.class}" id="${element.code}">`+element.symbol+'</div>'
            } else {
              content += `<div class="key_btn" id="${element.code}">`+element.symbol+'</div>'
            }
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