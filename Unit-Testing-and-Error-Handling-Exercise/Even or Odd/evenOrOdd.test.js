const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd')

describe('Chec Odd Or Even tests', () => {
    it('Check for invalid type', () => {
        expect(isOddOrEven(2)).to.equals(undefined);
    })
    it('Check for invalid type', () => {
        expect(isOddOrEven(["test"])).to.equals(undefined);
    })
    it('Check if odd', () => {
        expect(isOddOrEven('ll')).to.equals("even");
    })
    it('Check if even', () => {
        expect(isOddOrEven('l')).to.equals("odd");
    })
    it('Check multiple strings in row', () => {
        expect(isOddOrEven("i`am  odd")).to.equals("odd");
    })
})