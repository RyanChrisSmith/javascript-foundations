class Centaur {

  constructor({name, type}) {
    this.name = name;
    this.breed = type;
    this.standing = true;
    this.cranky = false;
    this.actions = 0;
    this.layingDown = false;
  }

  reset() {
    this.actions = 0;
    this.cranky = false;
  }

  shootBow() {
    if (this.cranky || this.layingDown){
      return "NO!";
    } else(this.effort());
    return "Twang!!!";
  }

  run () {
    if (this.cranky || this.layingDown){
      return "NO!";
    } else(this.effort());
    return "Clop clop clop clop!!!";
  }

  sleep() {
    if (this.standing === true) {
      return `NO!`;
    } else (this.reset());
    return `ZZZZ`;
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  effort(){
    this.actions++;
    if (this.actions == 3) {
      this.cranky = true;
    }
  }

  drinkPotion() {
    if (this.layingDown == true) {
      return `Not while I\'m laying down!`;
    }
    this.cranky = false;
  }
}

module.exports = Centaur;