/* eslint-disable import/prefer-default-export */
import { Key } from './Key';

const firstRow = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Insert', 'Delete', 'NumLock']; // 16
const secondRow = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace']; // 16
const thirdRow = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Home', 'End']; // 16
const fourthRow = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter']; // 16
const fifthRow = ['ShiftRight', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ShiftLeft', 'Up']; // 16
const sixthRow = ['CtrlLeft', 'Fn', 'Win', 'LeftAlt', 'Space', 'RightAlt', 'CtrlRight', 'Left', 'Down', 'Right']; // 16

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
