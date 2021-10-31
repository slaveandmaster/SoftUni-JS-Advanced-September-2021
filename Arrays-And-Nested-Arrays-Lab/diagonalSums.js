function solve(input) {
    let leftSum = 0;
    let rightSum = 0;
    for (let index = 0; index < input.length; index++) {
            leftSum += input[index][index];
            rightSum += input[index][input.length - index - 1];
          }
          console.log(`${leftSum} ${rightSum}`);
        //  let t1= input.map((row,index) => row[input.length - index - 1]).reduce((sum,p) => sum + p ,0);
        //  console.log(t1);
        //  let t2= input.map((row,index) => row[index]).reduce((sum,p) => sum + p ,0);
        //  console.log(t2);
}
solve([
  [20, 40],
  [10, 60],
]);
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
