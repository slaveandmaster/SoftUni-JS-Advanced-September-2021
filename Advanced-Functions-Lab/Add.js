function solve(num) {
    let number = num;
   function add() { number += number}
   return add;
}
let add5 = solve(5);
console.log(add5(2))