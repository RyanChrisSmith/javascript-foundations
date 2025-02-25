class TrickOrTreater {

  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.fill(candy);
    this.countCandies++;
    this.hasCandy = true;
  }

  eat() {
    this.bag.candies.pop();
    this.bag.count--;
    this.countCandies--;
  }

}

module.exports = TrickOrTreater;