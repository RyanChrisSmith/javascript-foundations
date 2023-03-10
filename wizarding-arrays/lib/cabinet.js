class Cabinet {

  constructor() {
    this.potions = [];
  }

  isEmpty() {
    return this.potions.length === 0;
  }

  add(potion) {
    if (Array.isArray(potion)) {
      this.potions.push(...potion);
    } else {
      this.potions.push(potion);
    }
  }

  takeFirstPotion() {
    return this.potions.shift();
  }

  takePotionWithName(name) {
    const index = this.potions.findIndex((potion) => potion.name === name);
    if (index === -1) {
      return null;
    }
    return this.potions.splice(index, 1)[0];
  }

  count(name) {
    return this.potions.filter((potion) => potion.name === name).length;
  }

}
module.exports = Cabinet;