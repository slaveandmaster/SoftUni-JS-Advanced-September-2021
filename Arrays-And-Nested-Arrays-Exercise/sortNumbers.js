function solve(input) {
  let sorted = input.sort((a, b) => a - b);
  for (let index = 1; index < sorted.length - 1; index += 2) {
    let currentItem = input[index];
    let idx = input.indexOf(currentItem);
    let lastElement = sorted.pop();
    input.splice(idx, 0, lastElement);
  }
  return input;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
