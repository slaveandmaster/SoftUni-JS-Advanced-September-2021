class Restaurant {
  constructor(budget) {
    this.budgetMoney = Number(budget);
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    //split info about products and append to a stockProducts
    for (let curentProduct of products) {
      let [product, qty, price] = curentProduct.split(" ");
      let calcPrice = Number(price);
      //if budget allow us to buy the current product product total price <= budget add products and deduct price from out budget
      if (calcPrice <= this.budgetMoney) {
        if (!this.stockProducts[product]) {
          this.stockProducts[product] = 0;
        }
        //if current product already exist in stockProducts just add new quantity
        this.stockProducts[product] += Number(qty);
        this.budgetMoney -= calcPrice;
        // finally wheter or not addded product we record to history
        this.history.push(`Successfully loaded ${qty} ${product}`);
      } else {
        this.history.push(
          `There was not enough money to load ${qty} ${product}`
        );
      }
    }
    return this.history.join("\n");
  }
  addToMenu(meal, neededProducts, price) {
    //if the meal is not in the menu append meal to menu object
    if (!this.menu[meal]) {
      this.menu[meal] = {
        products: {},
        price: Number(price),
      };
      for (let needed of neededProducts) {
        let [product, quantity] = needed.split(" ");
        this.menu[meal].products[product] = Number(quantity);
      }
      if (Object.keys(this.menu).length == 1) {
        //Check how many meals have in menu if one return
        // "Great idea! Now with the {meal} we have 1 meal in the menu, other ideas?"
        return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
      } else {
        // -	Zero, Two or more meal:
        // "Great idea! Now with the {meal} we have {the number of all meals in the menu} meals in the menu, other ideas?"
        return `Great idea! Now with the ${meal} we have ${
          Object.keys(this.menu).length
        } meals in the menu, other ideas?`;
      }
    } else {
      // if already have this meal return message
      // "The {meal} is already in the our menu, try something different."
      return `The ${meal} is already in the our menu, try something different.`;
    }
    // return this.history.join("\n");
  }
  showTheMenu() {
    if (Object.keys(this.menu).length == 0) {
      return "Our menu is not ready yet, please come later...";
    } else {
      for (const item in this.menu) {
        this.history.push(`${item} - $ ${this.menu[item].price}`);
      }
      // this.history.push(`${m[0]} - $ ${m[1].price}`);
    }
    return this.history.join("\n");
  }
  makeTheOrder(meal) {
    //check if meal exist in menu
    if (!this.menu[meal]) {
      //if not add message in history
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    } else {
      //create empy object for all needed products
      let allProducts = {};
      //check meal for all needed products
      for (const item in this.menu[meal].products) {
        //if some of products not exist ot quantity is less then needed add message in history
        if (
          !this.stockProducts[item] ||
          this.menu[meal].products[item] > this.stockProducts[item]
        ) {
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } else {
          // else add needed product in the assoc array
          allProducts[item] = this.menu[meal].products[item];
        }
      }
      // iterate through allProducts and deduct stock Products
      for (const product in allProducts) {
        this.stockProducts[product] -= Number(allProducts[product]);
      }
      //add price ot meal to the budget
      this.budgetMoney += Number(this.menu[meal].price);
      //add message in history for order
      return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  "Banana 10 5",
  "Banana 20 10",
  "Strawberries 50 30",
  "Yogurt 10 10",
  "Yogurt 500 1500",
  "Honey 5 50",
]);

kitchen.addToMenu(
  "frozenYogurt",
  ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
  9.99
);
let res = kitchen.addToMenu(
  "Pizza",
  [
    "Flour 0.5",
    "Oil 0.2",
    "Yeast 0.5",
    "Salt 0.1",
    "Sugar 0.1",
    "Tomato sauce 0.5",
    "Pepperoni 1",
    "Cheese 1.5",
  ],
  15.55
);
console.log(kitchen.makeTheOrder("frozenYogurt"));
console.log(kitchen.showTheMenu());
