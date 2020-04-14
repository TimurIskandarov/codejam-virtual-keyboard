class Key {
  constructor(keyName, language) {
    this.key = this.init(keyName);
    this.key.language = language;
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

  init(keyName) {
    const div = document.createElement('div');
    div.className = keyName;
    div.innerText = keyName;
    // style
    div.style.backgroundColor = 'yellowgreen';
    div.style.color = 'black';
    div.style.gridArea = keyName;
    this.keyLength(keyName);
    return div;
  }
}

export default Key;
