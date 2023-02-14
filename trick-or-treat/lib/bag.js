class Bag {

  constructor() {
    this.empty = true;
    this.candies = []
    this.count = 0;
  }

  fill(candy) {
    this.candies.push(candy);
    this.count++;
    this.empty = false;
  }

  contains(type) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === type) {
      return true;
      }
    }
    return false;
  }

}

module.exports = Bag;