function solve(input) {
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player = "X";
  let freeSpaces = dashboard.length * dashboard.length;
  let printMatrix = () => {
    for (let index = 0; index < dashboard.length; index++) {
      console.log(dashboard[index].join("\t"));
    }
  };
  function isWin(dashboard, player) {
    for (let index = 0; index < dashboard.length; index++) {
      let currentRow,
        currentCol,
        diagonal,
        secDiagonal = false;
      if (
        dashboard[index][0] == player &&
        dashboard[index][1] == player &&
        dashboard[index][2] == player
      ) {
        currentRow = true;
      } else if (
        dashboard[0][index] == player &&
        dashboard[1][index] == player &&
        dashboard[2][index] == player
      ) {
        currentCol = true;
      } else if (
        dashboard[0][0] == player &&
        dashboard[1][1] == player &&
        dashboard[2][2] == player
      ) {
        diagonal = true;
      } else if (
        dashboard[0][2] == player &&
        dashboard[1][1] == player &&
        dashboard[2][0] == player
      ) {
        secDiagonal == true;
      }
      if (
        currentRow == true ||
        currentCol == true ||
        diagonal == true ||
        secDiagonal == true
      ) {
        return true;
      }
    }
  }
  // let checkDiagonal = (matrix, mark) => {
  //   return matrix
  //     .map((row, index) => row[index])
  //     .reduce((acc, current) => {
  //       if (current == mark) {
  //         acc = acc + 1;
  //       }
  //       return acc;
  //     }, 0);
  // };
  // let checkSecondDiagonal = (matrix, mark) => {
  //   return matrix
  //     .map((row, index) => row[index][matrix.length - index - 1])
  //     .reduce((acc, current) => {
  //       if (current == mark) {
  //         acc = acc + 1;
  //       }
  //       return acc;
  //     }, 0);
  // };

  // let checkRow = (matrix, mark) => {
  //   return matrix.reduce((acc, current, index) => {
  //     let inner = current.reduce((row, item, itemIndex) => {
  //       if (item == mark) {
  //         row[item] = (row[item] || 0) + 1;
  //       }
  //       return row;
  //     }, {});
  //     if (acc) return true;
  //     return inner[player] == 3 ? true : false;
  //   }, false);
  // };
  // let sumCol = (matrix) => {
  //   return matrix.reduce((a, b) => a + b, 0);
  // };
  // let checkColumn = (matrix, mark) => {
  //   return matrix.map((row, index) => {
  //     return sumCol(matrix.map((col) => col[index]));
  //   });
  // };
  //check is already taken place...if taken print message and choose another.
  for (let index = 0; index < input.length; index++) {
    let [row, col] = input[index].split(" ").map(Number);
    if (dashboard[row][col] != false) {
      console.log(`This place is already taken. Please choose another!`);
      continue;
    }
    dashboard[row][col] = player;
    freeSpaces--;
    //if there no free space and nobody winds the game should be end and print message
    
    if (isWin(dashboard, player)) {
      console.log(`Player ${player} wins!`);
      printMatrix();
      break;
    }
    if (freeSpaces == 0) {
      console.log(`The game ended! Nobody wins :(`);
      printMatrix();
      return;
    }
    // if (
    //   checkRow(dashboard, player) == true ||
    //   checkColumn(dashboard, player) == 3 ||
    //   checkDiagonal(dashboard, player) == 3 ||
    //   checkSecondDiagonal(dashboard, player) == 3
    // ) {
    //   console.log(`Player ${player} wins!`);
    //   printMatrix();
    //   return;
    // }
    player = player === "X" ? "O" : "X";
  }
  //if someone win .. print message with player
}
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
