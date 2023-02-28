class Skater {

  constructor({name, skill, tricks, cash}) {
    this.name = name;
    this.skill = skill;
    this.tricks =tricks;
    this.money = cash;
    this.frustration = 0;
  }

  practice(trick) {
    if (this.tricks[trick]) {
      return `I already know ${trick}!`;
    } else {
      this.frustration++;
      if (this.frustration === 3) {
        this.tricks[trick] = true;
        this.frustration = 0;
        return `I just learned to ${trick}!!!`;
      } else {
        return `I need to practice ${trick} some more.`;
      }
    }
  }
}

module.exports = Skater;