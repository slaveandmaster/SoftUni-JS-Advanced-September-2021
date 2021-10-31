function solve(input) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let result = input.reduce((acc, item, index) => {
        if (item >= biggestNum) {
            acc.push(item);
            biggestNum = item;
        }
        return acc;
    }, [])
    return result;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
