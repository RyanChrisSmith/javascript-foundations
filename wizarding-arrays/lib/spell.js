class Spell {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }

  execute(targets) {
    if (typeof targets === 'string') {
      this.executionHistory.push(targets);
      return `Success! You've cast a spell on the ${targets}.`;
    } else if (Array.isArray(targets)) {
      let result = "";
      targets.forEach(target => {
        this.executionHistory.push(target);
        result += `Success! You've cast a spell on the ${target}. `;
      });
      return result.trim();
    }
  }

  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;