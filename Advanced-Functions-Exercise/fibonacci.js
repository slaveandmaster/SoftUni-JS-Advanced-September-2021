function getFibonator() {
    let [a, b] = [0, 0];
    function fibonacci() {
        let result = a + b; 
       [a , b] = [b , b + a || 1];
        return result || 1;
    }
    return fibonacci;

}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
