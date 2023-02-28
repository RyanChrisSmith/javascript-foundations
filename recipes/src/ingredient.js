class Ingredient {
  
  constructor({name, amount}) {
    this.name = name;
    this.amount = amount;
  }

  changeAmount(newAmount) {
    this.amount = newAmount;
  }
}

module.exports = Ingredient;
