var Material = require('./material')

class Craft {

  constructor({type, materials = []}) {
    this.name = type;
    this.materials = materials;
    this.completed = false;
  }

  completeCraft() {
    this.completed = true;
    return `All done! It looks great!`;
  }

  calculateProjectTotal() {
    var totalCost = 0;

    this.materials.forEach((material) => {
      totalCost += material.calculateMaterialCost();
    });
    return totalCost;
  }
}

module.exports = Craft;
