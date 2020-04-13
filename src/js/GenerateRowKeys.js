
import { Key } from './Key';

const firstRow = ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Insert', 'Delete', 'NumLock']; // 16
const secondRow = ['Tilda', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace']; // 16
const thirdRow = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'BracketLeft', 'BracketRight', 'Home', 'End']; // 16
const fourthRow = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Semicolon', 'Quote', 'Enter']; // 16
const fifthRow = ['ShiftLeft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Comma', 'Period', 'Slash', 'ShiftRight', 'Up']; // 16
const sixthRow = ['CtrlLeft', 'Fn', 'Win', 'LeftAlt', 'Space', 'RightAlt', 'CtrlRight', 'Left', 'Down', 'Right']; // 16

class GenerateRowKeys {
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
    return this.generateRowKeys();
  }

  //  Keys generate
  generateRowKeys() {
    const keys = [];
    this.rowKeys.forEach((key) => {
      keys.push(new Key(key, 'EN'));
    });
    this.rowKeys.splice(0, this.rowKeys.length);
    this.rowKeys = keys;
    return this.rowKeys;
  }
}

export default GenerateRowKeys;
