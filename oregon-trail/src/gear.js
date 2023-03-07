class Gear {

  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  }

  checkForValidity() {
    let validTypes = ['food', 'ammunition', 'clothes'];

    if (validTypes.includes(this.type)) {
      return `Great, we\'ll need lots of ${this.type}!`;
    }
    let variable = `I don\'t think a ${this.type} will help us.`;
    this.type = null;
    return variable;
  }
}

module.exports = Gear;
