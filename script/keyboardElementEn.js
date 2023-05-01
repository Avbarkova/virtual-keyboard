const keyboardElementEn = [
  {
    symbol: '`',
    shift: '~',
    code: 'Backquote',
  },
  {
    symbol: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    symbol: '2',
    shift: '@',
    code: 'Digit2',
  },
  {
    symbol: '3',
    shift: '#',
    code: 'Digit3',
  },
  {
    symbol: '4',
    shift: '$',
    code: 'Digit4',
  },
  {
    symbol: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    symbol: '6',
    shift: '^',
    code: 'Digit6',
  },
  {
    symbol: '7',
    shift: '&',
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
    symbol: 'q',
    shift: 'Q',
    code: 'KeyQ',
  },
  {
    symbol: 'w',
    shift: 'W',
    code: 'KeyW',
  },
  {
    symbol: 'e',
    shift: 'E',
    code: 'KeyE',
  },
  {
    symbol: 'r',
    shift: 'R',
    code: 'KeyR',
  },
  {
    symbol: 't',
    shift: 'T',
    code: 'KeyT',
  },
  {
    symbol: 'y',
    shift: 'Y',
    code: 'KeyY',
  },
  {
    symbol: 'u',
    shift: 'U',
    code: 'KeyU',
  },
  {
    symbol: 'i',
    shift: 'I',
    code: 'KeyI',
  },
  {
    symbol: 'o',
    shift: 'O',
    code: 'KeyO',
  },
  {
    symbol: 'p',
    shift: 'P',
    code: 'KeyP',
  },
  {
    symbol: '[',
    shift: '{',
    code: 'BracketLeft',
  },
  {
    symbol: ']',
    shift: '}',
    code: 'BracketRight',
  },
  {
    symbol: '\\',
    shift: '|',
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
    symbol: 'a',
    shift: 'A',
    code: 'KeyA',
  },
  {
    symbol: 's',
    shift: 'S',
    code: 'KeyS',
  },
  {
    symbol: 'd',
    shift: 'D',
    code: 'KeyD',
  },
  {
    symbol: 'f',
    shift: 'F',
    code: 'KeyF',
  },
  {
    symbol: 'g',
    shift: 'G',
    code: 'KeyG',
  },
  {
    symbol: 'h',
    shift: 'H',
    code: 'KeyH',
  },
  {
    symbol: 'j',
    shift: 'J',
    code: 'KeyJ',
  },
  {
    symbol: 'k',
    shift: 'K',
    code: 'KeyK',
  },
  {
    symbol: 'l',
    shift: 'L',
    code: 'KeyL',
  },
  {
    symbol: ';',
    shift: ':',
    code: 'Semicolon',
  },
  {
    symbol: '\'',
    shift: '"',
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
    class: 'extra shift shift_left',
    shift: null,
    code: 'ShiftLeft',
  },
  {
    symbol: '\\',
    shift: '|',
    code: 'IntlBackslash',
  },
  {
    symbol: 'z',
    shift: 'Z',
    code: 'KeyZ',
  },
  {
    symbol: 'x',
    shift: 'X',
    code: 'KeyX',
  },
  {
    symbol: 'c',
    shift: 'С',
    code: 'KeyC',
  },
  {
    symbol: 'v',
    shift: 'V',
    code: 'KeyV',
  },
  {
    symbol: 'b',
    shift: 'B',
    code: 'KeyB',
  },
  {
    symbol: 'n',
    shift: 'N',
    code: 'KeyN',
  },
  {
    symbol: 'm',
    shift: 'M',
    code: 'KeyM',
  },
  {
    symbol: ',',
    shift: '<',
    code: 'Comma',
  },
  {
    symbol: '.',
    shift: '>',
    code: 'Period',
  },
  {
    symbol: '/',
    shift: '?',
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
    class: 'extra shift shift_right',
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
export default keyboardElementEn;