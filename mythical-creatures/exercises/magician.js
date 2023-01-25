class Magician {

  constructor({name, assistant, clothing = 'top hat'}) {
    this.name = `The Great ${name}`;
    this.assistant = assistant;
    this.favoriteAccessory = clothing;
    this.confidencePercentage = 10;
  }

  performIncantation(word) {
    return `${word.toUpperCase()}!`;
  }

  performTrick() {
    this.confidencePercentage += 10;
    return `PULL RABBIT FROM ${this.favoriteAccessory.toUpperCase()}`;
  }

  performShowStopper() {
    if (this.confidencePercentage > 90 && this.assistant == true) {
      return `WOW! The magician totally just sawed that person in half!`;
    } else {
      return `Oh no, this trick is not ready!`;
    }
  }
}

module.exports = Magician;