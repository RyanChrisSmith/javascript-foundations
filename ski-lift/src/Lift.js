var Skier = require('./Skier');

class Lift {

  constructor(limit) {
    this.limit = limit;
    this.inService = true;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(name, hasLiftTicket) {
    if (!hasLiftTicket) {
      return `Sorry, ${name}. You need a lift ticket!`
    }
    if (this.skiers.length < this.limit) {
      let skier = new Skier(name, hasLiftTicket);
      this.skiers.push(skier);
    }
    return `Sorry, ${name}. Please wait for the next lift!`
  }

  startLift() {
    if (this.limit > this.skiers.length) {
      let difference = this.limit - this.skiers.length;
      if (difference > 1) {
        return `We still need ${difference} more skiers!`;
      } else {
        return `We still need 1 more skier!`
      }
    }
    if (this.limit === this.skiers.length) {
      this.safetyBar = 'down';
    }
  }
}

module.exports = Lift;