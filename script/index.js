import onloadKeybord from '../script/onloadKeybord.js';
import keyboardElementEn from '../script/keyboardElementEn.js';
import keyboardElementRu from '../script/keyboardElementRu.js';
let extra = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'AltLeft', 'AltRight'];
let normal = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
// загрузка DOM-элементов
let language;
if (localStorage.getItem('language')) {
  language = localStorage.getItem('language');
} else {
  language ='en';
  localStorage.setItem('language', language);
}
let textareaIntro='';
main();
function main() {
  onloadKeybord();
  let textarea = document.querySelector('textarea');
  if (textareaIntro!=='') {
    textarea.value=textareaIntro;
  }
  textarea.focus();
  let buttons = document.querySelectorAll('.key_btn');
  // клик по виртуальной клавиатуре выделяет кнопку
  for (let button of buttons) {
    button.addEventListener('mouseup', (e) => {
      if (e.target.id === 'Enter') {
        textarea.value += '\n';
      }
      if (e.target.id === 'Tab') {
        textarea.value += '\t';
      } 
      if (e.target.id === 'Backspace') {
        textareaIntro=textarea.value;
        textarea.value = textareaIntro.slice(0, textareaIntro.length-1);
      } 
      if (language === 'en') {
        for (let elem of keyboardElementEn) { //английский символ отражается в поле ввода при клике мыши
          if (e.target.id === elem.code) {
            if (normal.includes(e.target.id)) {
              textarea.value += elem.symbol;
            } 
          }
        }
      } else {
        for (let elem of keyboardElementRu) { //русский символ отражается в поле ввода при клике мыши
          if (e.target.id === elem.code) {
            if (normal.includes(e.target.id)) {
              textarea.value += elem.symbol;
            }
          }
        }
      }
    });
  }
  // нажатие на кнопку физической клавиатуры выделяет кнопку на виртуальной
  document.addEventListener('keydown', (e) => {
    e.preventDefault();// нажатие на кнопку физической клавиатуры прерывает обработчик событий при активном
    for (let button of buttons) {
      if (button.id === e.code) {
        button.classList.add('active');
      }
    }
    // переключение языка
    if (e.code === 'ShiftLeft') {
      document.addEventListener('keyup', (e) => {
        if (e.code === 'ControlLeft') {
          if (language === 'en') {
            language = 'ru';
          } else {
            language = 'en'
          }
          textareaIntro = textarea.value;
          localStorage.setItem('language', language);
          document.body.innerHTML = '<script type="module" src="./script/index.js" defer></script>';
          main();
        }
      });
    }
  });
  document.addEventListener('keyup', (e) => {
    for (let button of buttons) { // стирает выделение клавиши
      if (e.code === button.id) {
        button.classList.remove('active');
      }
    }
    if (e.code === 'Enter') {
      textarea.value += '\n';
    }
    if (e.code === 'Tab') {
      textarea.value += '\t';
    } 
    if (e.code === 'Backspace') {
      textareaIntro=textarea.value;
      textarea.value = textareaIntro.slice(0, textareaIntro.length-1);
    } 
    if (language === 'en') {
      for (let elem of keyboardElementEn) { //английский символ отражается в поле ввода при клике мыши
        if (e.code === elem.code) {
          if (normal.includes(e.code)) {
            textarea.value += elem.symbol;
          }
        }
      }
    } else {
      for (let elem of keyboardElementRu) { //русский символ отражается в поле ввода при клике мыши
        if (e.code === elem.code) {
          if (normal.includes(e.code)) {
            textarea.value += elem.symbol;
          }
        }
      }
    }
  });
};
