function solve(input) {
    let numbers = input.map(Number);
    let result = [];
    numbers.forEach((element, index) => {
        if (index % 2 == 0) {
            result.push(element);
        }
    });
    console.log(result.join(' '));
}
solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);