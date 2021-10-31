function solve(...args) {
    let arr = [];
    let result = args.reduce((acc,current) => {
        acc[typeof current] = (acc[typeof current] || 0) + 1;
        arr.push(`${typeof current}: ${current}`);
        return acc;
    },{})
    arr.forEach(r => console.log(r));
    Object.entries(result).sort((a,b) => b[1] - a[1]).forEach(element => {
        
    });(([type, value]) => {
        console.log(`${type} = ${value}`);
    });
}
solve('cat', 42, function () { console.log('Hello world!'); });