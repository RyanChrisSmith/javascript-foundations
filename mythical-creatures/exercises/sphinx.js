class Sphinx {

  constructor(name) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3){
      this.riddles.shift();
    }
  }

  attemptAnswer(attempt) {
    var correctAnswer = this.riddles.find(i => i.answer === attempt);
    var index = this.riddles.indexOf(correctAnswer);

    if (correctAnswer) {
      this.riddles.splice(index, 1);
      if (this.riddles.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${attempt}"???`
      }
      return "That wasn't that hard, I bet you don't get the next one";
    }
    else {
      this.heroesEaten++;
    }
  }
}

module.exports = Sphinx;