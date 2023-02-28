class SkatePark {

  constructor({name, year, type, features, isPrivate = false, price = 0}) {
    this.name = name;
    this.yearFounded = year;
    this.style = type;
    this.features = features;
    this.isPrivate = isPrivate;
    this.cost = price;
    this.occupants = [];
  }

  admit(skater) {
    if (this.cost === 0) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    }

    if (!this.isPrivate) {
      this.occupants.push(skater);
      return `Welcome to ${this.name}.`;
    }

    if (this.occupants.length >= 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }

    if (skater.money >= this.cost) {
      this.occupants.push(skater);
      skater.money -= this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    }

    return `Sorry, you don't have enough money.`
}

}

module.exports = SkatePark;