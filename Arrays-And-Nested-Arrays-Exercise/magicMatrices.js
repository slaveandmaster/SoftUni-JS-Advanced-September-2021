function solve(input) {
  let rowSum = 0;
  let isMagic = true;
  let sum = input[0].reduce((acc, c) => acc + c, 0);

  for (let index = 1; index < input.length; index++) {
    //let colSum = 0;
    rowSum = input[index].reduce((acc, current) => acc + current, 0);
    //for (let j = 0; j < input.length; j++) {
    //  colSum += input[j][index];
   // }
    if ( sum != rowSum) {
      // console.log(false);
      // return;
      isMagic = false;
    } 
  }
  for (let index = 0; index < input.length; index++) {
    let colSum = 0;
    for (let j = 0; j < input.length; j++) {
      colSum += Number(input[j][index]);
      
    }
    if (colSum != sum) {
      isMagic = false;
    }
  }
//   let calc = (arr)=> {
//      return  arr.reduce((a,b) => a + b ,0);
//   }
//get all column sum
 // let testColumn = input.map((value, index) => { return calc(input.map((row) => row[index]))});
 // console.log(testColumn);
 //let test = input.map((row, index) => { return input.map((column) => console.log(column[index]))});

  console.log(isMagic);
}
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
