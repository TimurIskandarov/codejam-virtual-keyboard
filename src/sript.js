import { GenerateRowKeys } from './js/GenerateRowKeys';

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
    repeatClassName += `${key.className} `;
    keyLength -= 1;
  }
  return repeatClassName.trimRight();
};

console.log('hello!');
const section = document.createElement('section');
section.className = 'keyboard__wrapper';
section.style.display = 'grid';
section.style.gridTemplate = 'repeat(16, 50px) / repeat(6, 50px)';
section.style.gridGap = '15px';
const keyboard = libraryKeys('EN');
const rowKeys = [];
keyboard.forEach((row) => {
  row.generateRowKeys().reduce((a, b) => section.appendChild(b), 0);
  rowKeys.push(row.reduce((a, b) => (b.length === 1 ? `${a} ${b.className}` : `${a} ${repeat(b)}`), ''));
});
console.log(rowKeys);
section.style.gridTemplateAreas = rowKeys;

// window.onload = function() {
//     // Keys
//     addKeysClickHandler();
// }
