(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (num) {
        if (typeof num !== 'number') {
            throw new Error('Invalid number type!')
        }
        let result = [];
        for (let index = Number(num); index < this.length; index++) {
            result.push(this[index]);
            
        }
        return result;
    }
    Array.prototype.take = function (num) {
        if (typeof num !== 'number') {
            throw new Error('Invalid number type!')
        }
        let result = [];
        for (let index = 0; index < num; index++) {
            result.push(this[index]);
            
        }
        return result;
    }
    Array.prototype.sum = function () {
        let sum = 0;
        for (let index = 0; index < this.length; index++) {
            sum += this[index];
            
        }
        return sum;
    }
    Array.prototype.average = function (params) {
        return this.sum() / this.length;
    }
}
)();
let myarr = [1,2,3];
console.log(myarr.average());