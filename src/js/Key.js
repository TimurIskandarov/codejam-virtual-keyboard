/* eslint-disable import/prefer-default-export */
export class Key {
  constructor({ key, language }) {
    this.language = language;
    // this.baseSize = 50;
    // this.keySize();
    // this.style.width = `${this.baseSize}px`;
    // this.style.height = `${this.baseSize}px`;
    this.innerText = key.className;
    this.keyLength(this.innerText);
    this.style.backgroundColor = 'yellowgreen';
    this.style.color = 'black';
    this.style.gridArea = key.className;
  }

  keySize() {
    this.keyLength(this.innerText);
    this.style.width = `${this.length * this.baseSize}px`;
    this.style.height = this.baseSize;
  }

  keyLength(keyName) {
    switch (keyName) {
      case ('Tab'): { this.length = 2; break; }
      case ('CapsLock'): { this.length = 2; break; }
      case ('ShiftLeft'): { this.length = 3; break; }
      case ('ShiftRight'): { this.length = 2; break; }
      case ('CtrlLeft'): { this.length = 2; break; }
      case ('CtrlRight'): { this.length = 2; break; }
      case ('Space'): { this.length = 5; break; }
      case ('Backspace'): { this.length = 3; break; }
      case ('Enter'): { this.length = 3; break; }
      default: { this.length = 1; break; }
    }
  }
}
