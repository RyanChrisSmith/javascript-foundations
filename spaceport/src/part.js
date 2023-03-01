class Part {
  constructor({ name, type, value }) {
    this.name = name;
    this.type = type;
    this.value = value;
    this.broken = false;
    this.isValid = false;
    if (this.name && this.type && this.value) {
      this.isValid = true;
    }
  }

  checkForValidity() {
    if (!this.name) {
      return 'This part needs a name!';
    } else if (!this.type) {
      return 'This part needs a type!';
    } else if (!this.value) {
      return 'This part needs a value!';
    }
  }
}

module.exports = Part;
