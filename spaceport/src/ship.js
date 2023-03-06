const Being = require('./Being');
const Part = require('./Part')

class Ship {

  constructor({name, type, captain, maxCrew, odometer = 0, fuelCapacity = 10, parts = {}}) {
    this.name = name;
    this.type = type;
    this.captain = captain;
    this.maxCrew = maxCrew;
    this.odometer = odometer;
    this.fuelCapacity = fuelCapacity;
    this.fuel = 0;
    this.crew = [];
    this.cargo = [];
    this.parts = parts;
  }

  addCrew(crew) {
    if (Array.isArray(crew)) {
      for (let i = 0; i < crew.length; i++) {
        if (crew[i].isAlive) {
          if (this.crew.length < this.maxCrew) {
            this.crew.push(crew[i]);
          }
        }
      }
    }
  }

  loadCargo(part) {
    if (part instanceof Object) {
      this.cargo.push(part);
    }
  }

  updatePart(newPart) {
    var oldPart = this.parts[newPart.type];
    var currentValue = oldPart ? oldPart.value : 0;
    var newValue = newPart.value;

    this.parts[newPart.type] = newPart;
    return currentValue - newValue;
  }

  checkReadiness() {
    if (!this.captain) {
      this.readyToFly = false;
      return `Cannot fly without a captain`;
    } else if (!this.fuel) {
      this.readyToFly = false;
      return `Cannot fly without fuel`
    } else if (!this.parts.shell) {
      this.readyToFly = false;
      return `Cannot fly without parts`
    } else {
      this.readyToFly = true;
      return `Good to go!`
    }
  }


}

module.exports = Ship;