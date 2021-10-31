const { expect } = require('chai');
const { sum }  = require('./sumOfNumbers');

describe('Sum Of Numbers Test', () => {
    it("works with number 5 and 3",() => {
        expect(sum([5,3])).to.equal(8);  
    })
    it('check if array containt valid numbers', ()=> {
        expect(isNaN(sum([5,'3']))).to.equal(false)
    })
    it('check array with one element ', () => {
        expect(sum([1])).to.equal(1)
    })
})