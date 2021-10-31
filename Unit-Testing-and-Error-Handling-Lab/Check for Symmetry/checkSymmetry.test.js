const { expect } = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('Symmetric Check Tests', () => {
    it(`Check if is invalid type `, ()=>{
        expect(isSymmetric('')).to.equal(false);
    })
    it(`Array is symmetric`, () => {
        expect(isSymmetric([1,2,1])).to.equal(true);
    })
    it(`Array is symmetric`, () => {
        expect(isSymmetric([1,1])).to.equal(true);
    })
    it(`Array is symmetric`, () => {
        expect(isSymmetric([1,'1'])).to.equal(false);
    })
    it(`Array is symmetric`, () => {
        expect(isSymmetric([0,1])).to.equal(false);
    })
    it(`Array is symmetric`, () => {
        expect(isSymmetric([1,2,2,1])).to.equal(true);
    })
})



// •	Take an array as an argument
// •	Return false for any input that isn’t of the correct type
// •	Return true if the input array is symmetric
// •	Otherwise, return false