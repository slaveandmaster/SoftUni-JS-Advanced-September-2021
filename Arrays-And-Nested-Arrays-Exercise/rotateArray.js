function solve(input, step) {
  for (let index = 0; index < step; index++) {
    input.unshift(input.pop());
  }
  console.log(input.join(' '));
}
solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
