function solve(arr, criteria) {
    const sorting = {
        'asc': (a,b) => a - b,
        'desc': (a,b) => b - a
    }
    return arr.sort(sorting[criteria]);
}
solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc')