const keyboardElementRu = [
  {
    symbol: 'ё',
    shift: 'Ё',
    code: 'Backquote',
  },
  {
    symbol: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    symbol: '2',
    shift: '\'',
    code: 'Digit2',
  },
  {
    symbol: '3',
    shift: '№',
    code: 'Digit3',
  },
  {
    symbol: '4',
    shift: ';',
    code: 'Digit4',
  },
  {
    symbol: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    symbol: '6',
    shift: ':',
    code: 'Digit6',
  },
  {
    symbol: '7',
    shift: '?',
    code: 'Digit7',
  },
  {
    symbol: '8',
    shift: '*',
    code: 'Digit8',
  },
  {
    symbol: '9',
    shift: '(',
    code: 'Digit9',
  },
  {
    symbol: '0',
    shift: ')',
    code: 'Digit0',
  },
  {
    symbol: '-',
    shift: '_',
    code: 'Minus',
  },
  {
    symbol: '=',
    shift: '+',
    code: 'Equal',
  },
  {
    symbol: 'Backspace',
    shift: null,
    code: 'Backspace',
  },
  {
    symbol: 'Tab',
    shift: null,
    code: 'Tab',
  },
  {
    symbol: 'й',
    shift: 'Й',
    code: 'KeyQ',
  },
  {
    symbol: 'ц',
    shift: 'Ц',
    code: 'KeyW',
  },
  {
    symbol: 'у',
    shift: 'У',
    code: 'KeyE',
  },
  {
    symbol: 'к',
    shift: 'К',
    code: 'KeyR',
  },
  {
    symbol: 'е',
    shift: 'Е',
    code: 'KeyT',
  },
  {
    symbol: 'н',
    shift: 'Н',
    code: 'KeyY',
  },
  {
    symbol: 'г',
    shift: 'Г',
    code: 'KeyU',
  },
  {
    symbol: 'ш',
    shift: 'Ш',
    code: 'KeyI',
  },
  {
    symbol: 'щ',
    shift: 'Щ',
    code: 'KeyO',
  },
  {
    symbol: 'з',
    shift: 'З',
    code: 'KeyP',
  },
  {
    symbol: 'х',
    shift: 'Х',
    code: 'BracketLeft',
  },
  {
    symbol: 'ъ',
    shift: 'Ъ',
    code: 'BracketRight',
  },
  {
    symbol: '\\',
    shift: '/',
    code: 'Backslash',
  },
  {
    symbol: 'Del',
    shift: null,
    code: 'Delete',
  },
  {
    symbol: 'Caps Lock',
    shift: null,
    code: 'CapsLock',
  },
  {
    symbol: 'ф',
    shift: 'Ф',
    code: 'KeyA',
  },
  {
    symbol: 'ы',
    shift: 'Ы',
    code: 'KeyS',
  },
  {
    symbol: 'в',
    shift: 'В',
    code: 'KeyD',
  },
  {
    symbol: 'а',
    shift: 'А',
    code: 'KeyF',
  },
  {
    symbol: 'п',
    shift: 'П',
    code: 'KeyG',
  },
  {
    symbol: 'р',
    shift: 'Р',
    code: 'KeyH',
  },
  {
    symbol: 'о',
    shift: 'О',
    code: 'KeyJ',
  },
  {
    symbol: 'л',
    shift: 'Л',
    code: 'KeyK',
  },
  {
    symbol: 'д',
    shift: 'Д',
    code: 'KeyL',
  },
  {
    symbol: 'ж',
    shift: 'Ж',
    code: 'Semicolon',
  },
  {
    symbol: 'э',
    shift: 'Э',
    code: 'Quote',
  },
  {
    symbol: 'Enter',
    shift: null,
    code: 'Enter',
  },
  {
    symbol: 'Shift',
    shift: null,
    code: 'ShiftLeft',
  },
  {
    symbol: 'я',
    shift: 'Я',
    code: 'KeyZ',
  },
  {
    symbol: '\\',
    shift: '/',
    code: 'IntlBackslash',
  },
  {
    symbol: 'ч',
    shift: 'Ч',
    code: 'KeyX',
  },
  {
    symbol: 'с',
    shift: 'С',
    code: 'KeyC',
  },
  {
    symbol: 'м',
    shift: 'М',
    code: 'KeyV',
  },
  {
    symbol: 'и',
    shift: 'И',
    code: 'KeyB',
  },
  {
    symbol: 'т',
    shift: 'Т',
    code: 'KeyN',
  },
  {
    symbol: 'ь',
    shift: 'Ь',
    code: 'KeyM',
  },
  {
    symbol: 'б',
    shift: 'Б',
    code: 'Comma',
  },
  {
    symbol: 'ю',
    shift: 'Ю',
    code: 'Period',
  },
  {
    symbol: '.',
    shift: ',',
    code: 'Slash',
  },
  {
    symbol: '↑',
    shift: null,
    code: 'ArrowUp',
  },
  {
    symbol: 'Shift',
    shift: null,
    code: 'ShiftRight',
  },
  {
    symbol: 'Ctrl',
    shift: null,
    code: 'ControlLeft',
  },
  {
    symbol: 'Win',
    shift: null,
    code: 'MetaLeft',
  },
  {
    symbol: 'Alt',
    shift: null,
    code: 'AltLeft',
  },
  {
    symbol: ' ',
    shift: ' ',
    code: 'Space',
  },
  {
    symbol: 'Alt',
    shift: null,
    code: 'AltRight',
  },
  {
    symbol: '←',
    shift: null,
    code: 'ArrowLeft',
  },
  {
    symbol: '↓',
    shift: null,
    code: 'ArrowDown',
  },
  {
    symbol: '→',
    shift: null,
    code: 'ArrowRight',
  },
  {
    symbol: 'Ctrl',
    shift: null,
    code: 'ControlRight',
  },
]

// const input = document.querySelector("input");
// let keyboard = [];
// input.addEventListener("keydown", logKey);
// function logKey(e) {
//   keyboard.push(e.code);
//   console.log (keyboard);
// }
export default keyboardElementRu;