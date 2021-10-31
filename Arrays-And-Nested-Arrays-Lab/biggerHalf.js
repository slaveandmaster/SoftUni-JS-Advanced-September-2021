function solve(input) {
    const half = Math.floor(input.length / 2);
    const result = input.sort((a,b)=> a -b).slice(half);
    console.log(result);
}
solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);