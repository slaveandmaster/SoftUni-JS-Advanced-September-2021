function solve(input) {
    const flatArray = input.flat().sort((a,b)=> b - a);
    console.log(flatArray[0]);
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
solve([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
