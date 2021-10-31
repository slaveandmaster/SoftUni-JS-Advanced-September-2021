class Stringer {
  constructor(str, strLength) {
    this.innerString = str;
    this.innerLength = strLength;
  }
  increase(l) {
    this.innerLength += l;
  }
  decrease(l) {
    let result = this.innerLength - l;
    this.innerLength = result < 0 ? 0 : result;
  }
  toString() {
    if (this.innerLength === 0) return "..."

    if (this.innerString.length > this.innerLength) {
      return `${this.innerString.slice(0, this.innerLength)}...`
    }
    return this.innerString
  }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
