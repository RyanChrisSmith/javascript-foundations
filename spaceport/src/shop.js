const Part = require('./Part')

class Shop {

  constructor({name}) {
    this.name = name;
    this.inventory = {};
  }

  addInventory(part) {
    if (part.isValid) {
      this.inventory[part.type] = part;
    }
  }

  outfitShip(ship, inventoryItemName) {
    const part = this.inventory[inventoryItemName];

    if (!ship.captain) {
      return `cannot outfit a ship without a captain`
    } else if (!ship.captain.credits) {
      const amountShort = part.value - ship.captain.credits;
      return `you require ${amountShort} more credits to make this purchase`;
    } else {
      ship.captain.credits -= part.value;
      ship.parts[inventoryItemName] = part;
      delete this.inventory[inventoryItemName];
      return `${inventoryItemName} added to ship`;
    }
  }
}

module.exports = Shop;