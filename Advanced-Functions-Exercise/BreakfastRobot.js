function solve() {
    //init object with all ingradients
  ingredient = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  //start library with recipes
  recepies = {
    apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
    lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
    burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  //object with all operation
  let actions = {
    prepare,
    restock,
    report,
  };
  function prepare(recipe, qty) {
    //uses the available ingredients to prepare the given meal
    //вземаме всички необходими съставки и ги поставяме в масив
    let getRecipeQty = Object.entries(recepies[recipe]).map((x) => [
      x[0],
      x[1] * qty,
    ]);
    //let result;
    for (let i = 0; i < getRecipeQty.length; i++) {
      let [gredient, qty] = getRecipeQty[i];
      if (ingredient[gredient] - qty < 0) {
        return `Error: not enough ${gredient} in stock`;
      }
    }
    getRecipeQty.forEach(([gredient, amount]) => {
      ingredient[gredient] -= amount;
    });
    return "Success";
  }
  function restock(microElement, qty) {
    ingredient[microElement] += qty;
    return "Success";
  }
  function report() {
    return Object.entries(ingredient)
      .map(([gredient, qty]) => `${gredient}=${qty}`)
      .join(" ");
  }
  //restock("protein", 10);
  return (arg) => {
    let [cmd, ingredient, quantity] = arg.split(" ");
    return actions[cmd](ingredient, Number(quantity));
  };
}
solve();

// restock flavour 50
// prepare lemonade 4
// restock carbohydrate 10

let manager = solve();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
