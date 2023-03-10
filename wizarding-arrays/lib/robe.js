class Robe {

  constructor() {
    this.pockets = Array(10).fill().map(() => [])
  }

  addToPocket(item) {
    for (let i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].length === 0) {
        this.pockets[i].push(item);
        return;
      }
    }
  }

  retrieve(itemName) {
    for (let i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].length > 0 && this.pockets[i][0] === itemName) {
        const item = this.pockets[i][0];
        this.pockets[i].splice(0, 1);
        return item;
      }
    }
    return null;
  }

  emptyAllPockets() {
    this.pockets = Array(10).fill().map(() => [])
  }
}

module.exports = Robe;