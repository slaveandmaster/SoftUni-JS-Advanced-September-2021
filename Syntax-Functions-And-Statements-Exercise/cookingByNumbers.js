function coockingByNumber(num, opOne,opTwo,opThree,opFour,opFive) {
    let input = Array.from(arguments);
    let number = Number(input.slice(0,1)[0]);
    let actions = {
        chop: (x) =>  x / 2 ,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1 ,
        bake: (x) => x * 3,
        fillet: (x) => x - x * 0.2
    }
    // input.slice(1).forEach((e) => { 
    //     let result = actions[e](number);
    //     console.log(result);
    //     number = result;
    // })
    for (let index = 1; index < input.length; index++) {
        let result = actions[input[index]](number);
        console.log(result);
        number = result;
        
    }
}
coockingByNumber('32', 'chop', 'chop', 'chop', 'chop', 'chop');
coockingByNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');