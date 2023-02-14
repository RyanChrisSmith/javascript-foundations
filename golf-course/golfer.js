class Golfer {

  constructor({name, handicap}) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var avg = this.handicap + par;
    return `I usually shoot a ${avg} on average.`
  }

  playRound(course) {
    if (course.difficulty === 'moderate') {
      this.frustration = 100;
    } if (course.difficulty === 'hard') {
      this.frustration = 500;
    }
  }

  hitTheRange() {
    this.confidence += 10
  }

  marvel(course) {
    return `I love the ${course.features.join(' and ')} on this course!`;
  }

  whatYaShoot(score) {
    if (score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else if (score === 0) {
      this.frustration -= 10;
      return 'Booyah!';
    } else {
      this.frustration += 20;
      return 'Doh!';
    }
  }
}

module.exports = Golfer;
