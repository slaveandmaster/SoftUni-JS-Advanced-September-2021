function solve(input) {
    let result = [];
    input.forEach((element) => {
        if (element < 0) {
            result.unshift(element);
        }
        else {
            result.push(element);
        }
    });
    console.log(result.join("\n"));
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);