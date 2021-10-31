function sum(n) {
    let sum = n
    function sum2(num) {
        sum += num;
        return sum2;
    }

    sum2.toString = () => { return sum};
    return sum2;
}
console.log(sum(1)(6)(-3).toString());