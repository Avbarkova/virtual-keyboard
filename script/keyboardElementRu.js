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
    class: 'extra backspace',
    shift: null,
    code: 'Backspace',
  },
  {
    symbol: 'Tab',
    class: 'extra tab',
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
    class: 'extra del',
    shift: null,
    code: 'Delete',
  },
  {
    symbol: 'Caps Lock',
    class: 'extra caps',
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
    class: 'extra enter',
    shift: null,
    code: 'Enter',
  },
  {
    symbol: 'Shift',
    class: 'extra shift_left',
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
    class: 'extra',
    shift: null,
    code: 'ArrowUp',
  },
  {
    symbol: 'Shift',
    class: 'extra shift_right',
    shift: null,
    code: 'ShiftRight',
  },
  {
    symbol: 'Ctrl',
    class: 'extra ctrl ctrl_left',
    shift: null,
    code: 'ControlLeft',
  },
  {
    symbol: 'Win',
    class: 'extra',
    shift: null,
    code: 'MetaLeft',
  },
  {
    symbol: 'Alt',
    class: 'extra alt_left',
    shift: null,
    code: 'AltLeft',
  },
  {
    symbol: ' ',
    class: 'space',
    shift: ' ',
    code: 'Space',
  },
  {
    symbol: 'Alt',
    class: 'extra alt_right',
    shift: null,
    code: 'AltRight',
  },
  {
    symbol: '←',
    class: 'extra',
    shift: null,
    code: 'ArrowLeft',
  },
  {
    symbol: '↓',
    class: 'extra',
    shift: null,
    code: 'ArrowDown',
  },
  {
    symbol: '→',
    class: 'extra',
    shift: null,
    code: 'ArrowRight',
  },
  {
    symbol: 'Ctrl',
    class: 'extra ctrl ctrl_right',
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