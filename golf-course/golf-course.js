class GolfCourse {

  constructor(name, difficulty, openings, features = []) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = []
  }

  checkInGroup(group) {
    if (group.length > this.openings) {
      return "Sorry, we are currently booked! Please come back later.";
    }

    for (const golfer of group) {
      this.currentlyPlaying.unshift(golfer.name);
    }

    this.openings -= group.length;
    return "You\'re checked in. Have fun!"
  }
}

module.exports = GolfCourse;
