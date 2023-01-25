class Pirate {

  constructor(name, job = 'scallywag') {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    if (this.booty > 400) {
      this.cursed = true;
      return `ARG! I\'ve been cursed!`;
    }
    this.booty += 100;
    return `YAARRR!`;
  }

  liftCurse() {
    if (this.booty >= 500) {
      this.booty -= 300;
      this.cursed = false;
      return `Your curse has been lifted!`;
    } else {
      return `You don\'t need to lift a curse!`
    }
  }
}

module.exports = Pirate;