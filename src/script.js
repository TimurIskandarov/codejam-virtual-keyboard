// eslint-disable-next-line import/extensions
import { GenerateRowKeys } from './js/GenerateRowKeys.js';

const libraryKeys = (language) => {
  let keyboardKeys = [];
  switch (language) {
    case ('EN'): {
      keyboardKeys = [
        new GenerateRowKeys('first').generateRowKeys(),
        new GenerateRowKeys('second').generateRowKeys(),
        new GenerateRowKeys('third').generateRowKeys(),
        new GenerateRowKeys('fourth').generateRowKeys(),
        new GenerateRowKeys('fifth').generateRowKeys(),
        new GenerateRowKeys('sixth').generateRowKeys(),
      ];
      break;
    }
    case ('RU'): {
      keyboardKeys = [
        new GenerateRowKeys('first'),
        new GenerateRowKeys('second'),
        new GenerateRowKeys('third'),
        new GenerateRowKeys('fourth'),
        new GenerateRowKeys('fifth'),
        new GenerateRowKeys('sixth'),
      ];
      break;
    }
    default: { break; }
  }
  return keyboardKeys;
};

/* для grid-area подхода */
const repeat = (key) => {
  let repeatClassName = '';
  let keyLength = key.length;
  while (keyLength !== 0) {
    repeatClassName += `${key.key.className} `;
    keyLength -= 1;
  }
  return repeatClassName.trimRight();
};

// eslint-disable-next-line no-undef
const section = document.createElement('section');
document.body.appendChild(section);
section.className = 'keyboard__wrapper';
section.style.display = 'grid';
section.style.gridTemplate = 'repeat(6, 50px) / repeat(16, 50px)';

/* для grid-area подхода */
// section.style.gridTemplate = 'repeat(6, 50px) / repeat(16, 50px)';

section.style.gridGap = '15px';
const keyboard = libraryKeys('EN');
const rowKeys = [];
keyboard.forEach((row) => {
  row.reduce((a, b) => section.appendChild(b.key), 0);
  /* для grid-area подхода */
  rowKeys.push(row.reduce((a, b) => (b.length === 1 ? `${a} ${b.key.className}` : `${a} ${repeat(b)}`), ''));
});

/* для grid-area подхода */
console.log(rowKeys);
// section.style.gridTemplateAreas = rowKeys;

// window.onload = function() {
//     // Keys
//     addKeysClickHandler();
// }
