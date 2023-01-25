const Direwolf = require('./direwolf');

class Stark {

  constructor({name, area = 'Winterfell'}){
    this.name = name;
    this.location = area;
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe){
      return `The North Remembers`;
    }
    return `Winter is Coming`;
  }

  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;