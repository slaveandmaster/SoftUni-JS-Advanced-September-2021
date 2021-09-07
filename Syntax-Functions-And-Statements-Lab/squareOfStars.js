function squareOfStars(input) {
  const size = input || 5;
  let row = "";
  for (let index = 0; index < size; index++) {
    row += " * ".repeat(size) + "\n";
  }
  console.log(row);
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars();
