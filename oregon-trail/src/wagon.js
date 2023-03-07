class Wagon {

  constructor({name, wheels = [], axles = [], oxen = [], yokes = [], food, ammunition, clothes, settlers = [] }) {
    this.title = name;
    this.wheels = wheels;
    this.axles = axles;
    this.oxen = oxen;
    this.yokes = yokes;
    this.food = food;
    this.ammunition = ammunition;
    this.clothes = clothes;
    this.settlers = settlers;
  }

  addPart(part) {
    if (part.type === 'wheel') {
      this.wheels.push(part);
    } else if (part.type === 'axle') {
      this.axles.push(part);
    } else if (part.type === 'ox') {
      this.oxen.push(part);
    } else if (part.type === 'yoke') {
      this.yokes.push(part);
    }
  }

  canTravel() {
    return (
      this.wheels.length === 4 &&
      this.wheels.some(wheel => wheel.broken) === false &&
      this.axles.length === 2 &&
      this.axles.some(axle => axle.broken) === false &&
      this.oxen.length > 1 &&
      this.oxen.some(ox => ox.broken) === false &&
      this.yokes.length > 0 &&
      this.yokes.length * 2 >= this.oxen.length &&
      this.settlers.length > 0 &&
      this.settlers.some(settler => settler.status !== 'dead')
      );
  }
}

module.exports = Wagon;