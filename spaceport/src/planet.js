class Planet {

  constructor({name, shop, coordinates}) {
    this.name = name;
    this.shop = shop;
    this.coordinates = coordinates;
  }

  landShip(ship) {
    this.currentShip = ship;
  }

  calculateDistance(otherPlanet) {
    const dx = (this.coordinates.x - otherPlanet.coordinates.x)**2;
    const dy = (this.coordinates.y - otherPlanet.coordinates.y)**2;
    const dz = (this.coordinates.z - otherPlanet.coordinates.z)**2;
    return (Math.sqrt(dx + dy + dz));
  }

  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }

  giveClearance(otherPlanet) {
    let ship = this.currentShip;

    if (!ship.fuel) {
      return `Clearance denied: Cannot fly without fuel`
    }

    const distance = Math.ceil(this.calculateDistance(otherPlanet));
    ship.fuel -= distance;
    this.currentShip = undefined;
    otherPlanet.currentShip = ship;
    return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`
  }
}

module.exports = Planet;