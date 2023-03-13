class Wizard {

  constructor({name}) {
    this.name = name;
    this.pets = [];
    this.petsCount = 0;
  }

  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount++;
  }

  petList() {
    const petDescriptions = this.pets.map(pet => `A ${pet.type} named ${pet.name}`).join('; ');
    return petDescriptions;
  }

  getWand(wand) {
    this.wand = wand;
  }

  castSpell(spell) {
    return `Casting ${spell}!`
  }
}

module.exports = Wizard;