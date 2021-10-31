function solve(n, k) {
    let nElements = n;
    let kElements = k;
    let result = [1];
    for (let index = 1; index < nElements; index++) {
        let beginIndex = Math.max(0, index - kElements);
        let sum = result.slice(beginIndex, beginIndex + kElements).reduce((acc,current) => acc + current,0);
        result.push(sum);
        
    }
    console.log(result);
}
solve(6, 3);
solve(8, 2);