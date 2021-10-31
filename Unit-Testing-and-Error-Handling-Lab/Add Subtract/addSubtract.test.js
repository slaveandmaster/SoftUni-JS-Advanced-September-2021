const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');

describe('Check returned Object', () => {
    let obj = {};
    beforeEach(() => {
        obj = createCalculator();
    })
    it('Check it has properties add subtract get methods', () =>{
        expect(obj).to.has.ownProperty('add');
        expect(obj).to.has.ownProperty('subtract');
        expect(obj).to.has.ownProperty('get');
    })
    it('Check ',()=>{
        expect(createCalculator().value).to.equals(undefined);
    })
    it('Check add one number', () => {
        obj.add(1);
        expect(obj.get()).to.equals(1)
    })
    it('Check subtract one number', () => {
        obj.subtract(1);
        expect(obj.get()).to.equals(-1)
    })
    it('Check add multiple numbers', () => {
        obj.add(1);
        obj.add(3)
        expect(obj.get()).to.equals(4)
    })
    it('Check add and subtract multiple numbers', () => {
        obj.add(2);
        obj.subtract(1)
        expect(obj.get()).to.equals(1)
    })
    it('Check numbers parsed from string', () => {
        obj.add('1');
        obj.add('3')
        expect(obj.get()).to.equals(4)
    })
})