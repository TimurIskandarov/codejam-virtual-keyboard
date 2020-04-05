/* eslint-disable import/prefer-default-export */
import { Key } from './Key';

const firstRow = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Insert', 'PrtScr', 'Delete', 'Home'];
const secondRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'End'];
const thirdRow = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'NumLock'];
const fourthRow = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'PgUp'];
const fifthRow = ['ShiftRight', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftLeft', 'Up', 'PgDn'];
const sixthRow = ['LeftCtrl', 'Fn', 'Win', 'LeftAlt', 'Space', 'RightAlt', 'ContextMenu', 'RightCtrl', 'Left', 'Down', 'Right'];

export class GenerateRowKeys {
  constructor(numberRow) {
    switch (numberRow) {
      case ('first'): { this.rowKeys = firstRow; break; }
      case ('second'): { this.rowKeys = secondRow; break; }
      case ('third'): { this.rowKeys = thirdRow; break; }
      case ('fourth'): { this.rowKeys = fourthRow; break; }
      case ('fifth'): { this.rowKeys = fifthRow; break; }
      case ('sixth'): { this.rowKeys = sixthRow; break; }
      default: { this.rowKeys = 'Error'; break; }
    }
  }

  //   Keys generate
  generateRowKeys() {
    const keys = [];
    this.rowKeys.forEach((key) => {
      const div = document.createElement('div');
      div.className = key;
      keys.push(new Key(key, 'EN'));
    });
    this.rowKeys.splice(0, this.rowKeys.length);
    this.rowKeys = keys;
    return this.rowKeys;
  }
}
