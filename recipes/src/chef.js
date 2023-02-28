var Recipe = require('../src/recipe.js');

class Chef {

  constructor(name, recipeBox) {
    this.name = name;
    this.recipeBox = recipeBox;
  }

  tryRecipe(recipeName, rating) {
    const recipe = this.recipeBox.find(recipe => recipe.name === recipeName);
    if (recipe) {
      recipe.rateRecipe(rating)
    } else {
      console.log(`${recipeName} is not in your recipe box!`);
    }
  }

  addRecipe(name, ingredients) {
    const recipe = new Recipe({ name, ingredients });
    this.recipeBox.push(recipe);
  }

  changeRecipe(recipeName, ingredientName, newAmount) {
    const recipe = this.recipeBox.find(recipe => recipe.name === recipeName);
    if (!recipe) {
      console.log(`${recipeName} is not in your recipe box!`);
      return;
    }

    const ingredient = recipe.ingredients.find(ingredient => ingredient.name === ingredientName);
    if (!ingredient) {
      console.log(`${ingredientName} is not an ingredient in ${recipeName}!`);
      return;
    }

    ingredient.amount = newAmount;
  }

}

module.exports = Chef;
