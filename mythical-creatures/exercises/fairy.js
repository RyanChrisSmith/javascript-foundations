class Fairy {

  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = []
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    this.clothes.dresses.push(...flowers);
  }

  becomeProvoked() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition == "Vengeful" && this.humanWards.length != 2){
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    } else (this.disposition = "Good natured");
    return infant;
  }
}

module.exports = Fairy;