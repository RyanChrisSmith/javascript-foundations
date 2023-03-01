class Being {

  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.isAlive = true;
    this.credits = 0;
  }

  updateCredits(newAmount) {
    this.credits += newAmount;
  }
}

module.exports = Being;
