function largestNumber(numOne, numTwo, numThree) {
    let max;
    if (numOne > numTwo && numOne > numThree) {
        max = numOne;
    }
    else if (numTwo > numThree && numTwo > numOne) {
        max = numTwo
    }
    else if (numTwo < numThree && numThree > numOne) {
        max = numThree;
        
    }        
    console.log(max);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);