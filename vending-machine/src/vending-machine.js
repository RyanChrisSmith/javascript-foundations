class VendingMachine {

  constructor({id, isBroken}) {
    this.id = id;
    this.isBroken = isBroken;
    this.snacks = [];
  }

  addSnacks(thisSnack) {
    const snack = this.snacks.find(snack => snack.name === thisSnack.name);
    if (!snack) {
      this.snacks.push(thisSnack);
    }
    return `Sorry, that snack is already stocked! Try adding a different snack.`
  }

  purchaseSnack(snackName, moneyDeposited) {
    const snack = this.snacks.find(snack => snack.name === snackName);
    if (snack) {
      if (snack.itemsInStock < 1) {
        return `Sorry, no items in stock. Try another item.`;
      }
      if (moneyDeposited < snack.price) {
        return `Sorry, not enough payment. Please add more money.`;
      }
      if (snack.price <= moneyDeposited) {
        let change = moneyDeposited - snack.price;
        snack.itemsInStock--;
        return `Success! Here is $${change} back!`;
      }
    }
    return `Sorry, we dont have that snack in this machine.`;
  }

}

module.exports = VendingMachine;

// changeRecipe(recipeName, ingredientName, newAmount) {
//   const recipe = this.recipeBox.find(recipe => recipe.name === recipeName);
//   if (!recipe) {
//     console.log(`${recipeName} is not in your recipe box!`);
//     return;
//   }

//   const ingredient = recipe.ingredients.find(ingredient => ingredient.name === ingredientName);
//   if (!ingredient) {
//     console.log(`${ingredientName} is not an ingredient in ${recipeName}!`);
//     return;
//   }

//   ingredient.amount = newAmount;
// }