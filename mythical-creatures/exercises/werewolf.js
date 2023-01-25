class Werewolf {

  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.hungry = false;
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = !this.hungry;
      return `Aaa-Woooo!`;
    } if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = !this.hungry;
      return `Where are I?`;
    }
  }

  eatVictim(victim) {
    if (this.hungry === true) {
      victim.alive = false;
      this.form = 'human'
      return `Yum, Hannah was delicious.`;
    } if (this.form === 'human') {
      return `No way am I eating Baby, I'd like a burger!`;
    }
  }
}

module.exports = Werewolf;