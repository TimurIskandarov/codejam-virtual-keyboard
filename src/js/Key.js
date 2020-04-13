/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class Key {
  constructor(keyName, language) {
    this.key = this.init(keyName);
    this.key.language = language;
    // this.keyLength(keyName);
  }


  // this.length для grid-area подхода
  keyLength(keyName) {
    switch (keyName) {
      case ('Tab'): { this.length = 2; /* this.key.style.gridColumn = `1 / ${this.length + 1}`; */ break; }
      case ('CapsLock'): { this.length = 2; /* this.key.style.gridColumn = `1 / ${this.length + 1}`; */ break; }
      case ('ShiftLeft'): { this.length = 3; /* this.key.style.gridColumn = `1 / ${this.length + 1}`; */ break; }
      case ('ShiftRight'): { this.length = 2; /* this.key.style.gridColumn = `14 / ${this.length + 14}`; */ break; }
      case ('CtrlLeft'): { this.length = 2; /* this.key.style.gridColumn = `1 / ${this.length + 1}`; */ break; }
      case ('CtrlRight'): { this.length = 2; /* this.key.style.gridColumn = `12 / ${this.length + 12}`; */ break; }
      case ('Space'): { this.length = 5; /* this.key.style.gridColumn = `6 / ${this.length + 6}`; */ break; }
      case ('Backspace'): { this.length = 3; /* this.key.style.gridColumn = `14 / ${this.length + 14}`; */ break; }
      case ('Enter'): { this.length = 3; /* this.key.style.gridColumn = `14 / ${this.length + 14}`; */ break; }
      default: { this.length = 1; break; }
    }
  }


  init(keyName) {
    const div = document.createElement('div');
    div.innerText = keyName;
    div.style.backgroundColor = 'yellowgreen';
    div.style.color = 'black';
    div.className = keyName;

    /* для подхода через grid-area */
    this.keyLength(keyName);
    div.style.gridArea = keyName;

    return div;
  }
}
