function gcd(numberOne, numberTwo) {

    if (!numberTwo) {
        return numberOne;
    }
    else {
       
        return  gcd(numberTwo, numberOne % numberTwo);
    }
    
}
console.log(gcd(15,5));
gcd(2154,458);