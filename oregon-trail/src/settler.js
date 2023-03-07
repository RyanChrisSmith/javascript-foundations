class Settler {

  constructor({name, age, nationality = 'unknown'}) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(distress) {
    if (this.ailments.length < 3) {
      this.ailments.push(distress);
    }

    if (this.ailments.length === 1){
      this.status = 'fair';
    }
    if (this.ailments.length === 2) {
      this.status = 'poor';
    }
    if (this.ailments.length ===3) {
      this.status = 'dead';
    }
  }

  heal() {
    if (this.ailments.length < 3) {
      this.ailments.length = 0;
      this.status = 'healthy';
    }
    return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
  }
}

module.exports = Settler;