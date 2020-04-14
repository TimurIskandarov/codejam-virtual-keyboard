/* eslint-disable import/extensions */

import GenerateRowKeys from './js/GenerateRowKeys.js';

const libraryKeys = (language) => {
  let keyboardKeys = [];
  switch (language) {
    case ('EN'): {
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

const repeat = (key) => {
  let repeatClassName = '';
  let keyLength = key.length;
  while (keyLength !== 0) {
    repeatClassName += `${key.key.className} `;
    keyLength -= 1;
  }
  return repeatClassName.trimRight();
};

const section = document.createElement('section');
document.body.appendChild(section);
section.className = 'keyboard__wrapper';
section.style.display = 'grid';
section.style.gridTemplate = 'repeat(6, 50px) / repeat(16, 50px)';
section.style.gridGap = '10px';
const keyboard = libraryKeys('EN');
const rowKeys = [];
keyboard.forEach((row) => {
  row.reduce((a, b) => section.appendChild(b.key), 0);
  rowKeys.push(row.reduce((a, b) => (b.length === 1 ? `${a} ${b.key.className}` : `${a} ${repeat(b)}`), '').trimLeft());
});

section.style.gridTemplateAreas = `'${rowKeys[0]}'
                                   '${rowKeys[1]}'
                                   '${rowKeys[2]}'
                                   '${rowKeys[3]}'
                                   '${rowKeys[4]}'
                                   '${rowKeys[5]}'`;

// window.onload = function() {
//     // Keys
//     addKeysClickHandler();
// }
