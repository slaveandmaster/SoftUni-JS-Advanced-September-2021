function solve(input) {
  //create object catalog with first character of every product
  let obj = input
    .sort()
    .map((line) => line.split(" : "))
    .reduce((acc, current) => {
      let character = current[0].charAt(0);
      if (!acc[character]) {
        acc[character] = [];
      }
      acc[character].push(current[0] + ": " + current[1]);
      return acc;
    }, {});
  //loop input and check if capital letter exist in object and add product and price
  // input.map((line) => line).reduce((acc,current) => {
  //     let firstLetter = current.charAt(0);
  //     if (test[firstLetter]) {
  //         test[firstLetter].push(current);
  //     }
  //     return acc;
  // },)
  // print result
  for (const [key, items] of Object.entries(obj)) {
    console.log(key);
    items.forEach((item) => console.log(`  ${item}`));
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
solve([
  "Banana : 2",
  "Rubic's Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
