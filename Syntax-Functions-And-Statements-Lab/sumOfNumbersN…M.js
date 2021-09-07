function sumOfNumbers(numberOne, numberTwo) {
    const start = Number(numberOne);
    const end = Number(numberTwo);
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += index;
        
    }
    console.log(sum);
}
sumOfNumbers('1','5');
sumOfNumbers('-8', '20');