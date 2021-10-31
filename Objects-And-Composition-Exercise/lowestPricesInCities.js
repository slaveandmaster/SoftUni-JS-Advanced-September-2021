function solve(input) {
  let products = new Map();
  for (const item of input) {
    let [town, product, price] = item.split(" | ");
    if (!products.has(product)) {
      products.set(product, new Map());
    }
    products.get(product).set(town, Number(price));
  }
  for (let [key, items] of [...products]) {
    let lowerPrice = [...items].reduce((price, nextPrice) => {
      if (price[1] <= nextPrice[1]) {
        return price;
      } else {
        return nextPrice;
      }
     // return price;
    }, 0);
    console.log(`${key} -> ${lowerPrice[1]} (${lowerPrice[0]})`);
  }
  //console.log(products);
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
solve([
  "Sofia City | Audi | 100000",
"Sofia City | BMW | 100000",
"Sofia City | Mitsubishi | 10000",
"Sofia City | Mercedes | 10000",
"Sofia City | NoOffenseToCarLovers | 0",
"Mexico City | Audi | 1000",
"Mexico City | BMW | 99999",
"New York City | Mitsubishi | 10000",
"New York City | Mitsubishi | 1000",
"Mexico City | Audi | 100000",
"Washington City | Mercedes | 1000"
])
