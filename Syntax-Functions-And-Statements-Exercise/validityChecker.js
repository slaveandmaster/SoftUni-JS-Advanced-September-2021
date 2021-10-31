function validityChecker(x1,y1,x2,y2) {
    //let [ x1,y1,x2,y2] = input;
    let comparePoints = (x1,y1,x2,y2) => {
        let x = x2 - x1;
        let y = y2 - y1;
        const distance = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }
        else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    comparePoints(x1,y1,0,0);
    comparePoints(x2,y2,0,0);
    comparePoints(x1,y1,x2,y2);
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);