function solve(input) {
    //get first row
    let result = input.reduce((acc,row,rowIndex) => {
        //get element from row with index
      let inner = row.reduce((acc, rowItem, itemIndex) => {
          //check if rowItem is equal to next item in row
          if (rowItem == row[itemIndex + 1]) {
            acc = acc + 1;
          }
          //check if rowItem is equal to next rowItem in same index position
          if (rowItem == (input[rowIndex + 1] || [])[itemIndex]) {
              acc = acc + 1;
          }
          return acc;
      },0)
      //count how many times we find equal numbers
      return acc + inner;
    },0)
    console.log(result);
}
solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
