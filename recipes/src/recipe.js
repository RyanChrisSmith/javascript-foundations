class Recipe {

  constructor({name, ingredients}) {
    this.name = name;
    this.ingredients = ingredients;
    this.attempted = false;
    this.rating = null;
  }

  rateRecipe(newRating) {
    this.attempted = true;
    this.rating = newRating;
  }

  changeIngredientAmount(name, amount) {
    const ingredient = this.ingredients.find((ingredient) => ingredient.name === name);
    ingredient.amount = amount;
  }

  generateGroceryList() {
    let groceryList = 'You need:';
    this.ingredients.forEach(ingredient => {
      groceryList += ` ${ingredient.amount} ${ingredient.name},`;
    });
    return groceryList;
  }
}

module.exports = Recipe;
