/* eslint-disable import/prefer-default-export */
export class Key {
  constructor({ key, language }) {
    this.language = language;
    this.baseSize = 50;
    this.keySize();
    this.innerText = key.className;
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
      case ('LeftShift'): { this.length = 3; break; }
      case ('RightShift'): { this.length = 2; break; }
      case ('LeftCtrl'): { this.length = 2; break; }
      case ('RightCtrl'): { this.length = 2; break; }
      case ('Space'): { this.length = 5; break; }
      case ('Backspace'): { this.length = 3; break; }
      case ('Enter'): { this.length = 3; break; }
      default: { this.length = 1; break; }
    }
  }
}
