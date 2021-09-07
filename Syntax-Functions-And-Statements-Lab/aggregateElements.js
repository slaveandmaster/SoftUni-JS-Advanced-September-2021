function aggregateElements(input) {
    let sum = input.reduce((acc, current) => acc + current,0);
    let invSum = input.map((x) => 1 /x).reduce((acc, current) => acc + current,0);
    let concatStr = input.reduce((acc, current) => acc.concat(current),'');
    console.log(sum);
    console.log(invSum.toFixed(4));
    console.log(concatStr);
}
aggregateElements([1,2,3]);
aggregateElements([2,4,8,16]);