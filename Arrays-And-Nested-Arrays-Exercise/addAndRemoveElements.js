function solve(input) {
    let result = [];
    let initNumber = 1;
    let actions = {
        add: () => {
            result.push(initNumber)
        },
        remove: () => {
            result.pop(initNumber)}
        }
        input.forEach((cmd) => {
            actions[cmd]();
            initNumber+=1;
    })
    if (result.length == 0) {
        console.log(`Empty`);
    }
    else {
        console.log(result.join('\n'));
    }
}
solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
