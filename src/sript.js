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

console.log("hello!");
const section = document.createElement('section');
section.className = 'keyboard__wrapper';
section.style.display = 'grid';
section.style.gridTemplate = '50px / 50px';
console.log(section);
const keyboard = libraryKeys('EN');
const rowKeys = [];
keyboard.forEach((row) => {
  row.reduce((a, b) => section.appendChild(b), 0);
  rowKeys.push(row.reduce((a, b) => `${a} ${b.className} `, ' ')).trim();
});
console.log(rowKeys);
section.style.gridTemplateAreas = rowKeys;

// window.onload = function() {
//     // Keys
//     addKeysClickHandler();
// }
