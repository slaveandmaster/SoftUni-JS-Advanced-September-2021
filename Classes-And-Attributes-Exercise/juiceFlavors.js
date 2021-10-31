function solve(input) {
  let juices = {};
  let bottles = new Map();
  for (const line of input) {
      //get inputs
    let [juice, qty] = line.split(" => ");
    //check if property juice value exist if not create with default value 0 
    if (!juices[juice]) {
      juices[juice] = 0;
    }
    //in other way add new quantity to existed juice
    //create reference to current value;
    //check if bottles have already bottle of these juice
    //if not create with initial value 0 
    juices[juice] += Number(qty);
    let currentQty = juices[juice];
    if (currentQty >= 1000) {
      if (!bottles.has(juice)) {
        bottles.set(juice, 0);
      }
      //calculate how much bottle we can create = curent qty - leftJuice which is module division and finally divide to 1000
      let bottle = (currentQty - (currentQty % 1000)) / 1000;
      //left quantity juice
      let leftJuice = currentQty % 1000;
      //change qty of juice
      juices[juice] = leftJuice;
      //add bottles
      bottles.set(juice, bottles.get(juice) + bottle);
    }
  }
  for (const [key, value] of bottles.entries()) {
    console.log(`${key} => ${value}`);
  }
}
solve([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
