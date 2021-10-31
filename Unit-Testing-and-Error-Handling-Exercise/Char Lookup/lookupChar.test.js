const { expect } = require('chai');
const { lookupChar } = require('./lookupChar')
describe('Lookup Char tests ->', () => {
    it('Check for valid type string' ,() => {
        expect(lookupChar(1,1)).to.equals(undefined);
    })
    it('Check for valid type index' ,() => {
        expect(lookupChar("test","1")).to.equals(undefined);
        expect(lookupChar("test",2.2)).to.equals(undefined);
    })
    it('Check index', () =>{
        expect(lookupChar("test",-1)).to.equals("Incorrect index")
        expect(lookupChar("test",5)).to.equals("Incorrect index");
    })
    it('Check for correct result', () => {
        expect(lookupChar('A',0)).to.equal("A")
        expect(lookupChar('qwerty',2)).to.equal("e")
    })

})