function solve(input) {
    let numbers = input.map(Number);
    const sum = numbers[0] + numbers[numbers.length - 1];
    console.log(`${sum}`);
}
solve(['20', '30', '40'])
solve(['5', '10']);