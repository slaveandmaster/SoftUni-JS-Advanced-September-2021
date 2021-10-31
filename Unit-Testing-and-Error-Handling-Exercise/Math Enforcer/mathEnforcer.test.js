const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('Math Enforcer test', () => {
    describe('addFive' ,() => {
        it('Add number', ()=>{
            expect(mathEnforcer.addFive(0)).to.eq(5);
        })
        it('Check for valid type', ()=>{
            expect(mathEnforcer.addFive('0')).to.eq(undefined);
        })
        it('Add negative number', ()=>{
            expect(mathEnforcer.addFive(-2)).to.eq(3);
        })
        it('Add float number', ()=>{
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1,0.01);
        })
    });
    describe('subtractTen' ,() => {
        it('Subtract number', ()=>{
            expect(mathEnforcer.subtractTen(2)).to.eq(-8);
        })
        it('Check for valid type', ()=>{
            expect(mathEnforcer.subtractTen('0')).to.eq(undefined);
        })
        it('subtract negative number', ()=>{
            expect(mathEnforcer.subtractTen(-2)).to.eq(-12);
        })
        it('subtract float number', ()=>{
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1,0.01);
        })
    });
    describe('sum' ,() => {
        it('Check sum positive number', () => {
            expect(mathEnforcer.sum(1,1)).to.eq(2);
        })
        it('Check sum positive and negative number', () => {
            expect(mathEnforcer.sum(10,-1)).to.eq(9);
        })
        it('Check sum parameters type', () => {
            expect(mathEnforcer.sum(1,'1')).to.eq(undefined);
        })
        it('Check sum parameters type', () => {
            expect(mathEnforcer.sum('1',1)).to.eq(undefined);
        })
        it('Check sum parameters type', () => {
            expect(mathEnforcer.sum('1','1')).to.eq(undefined);
        })
        it('Check sum two negative numbers', () => {
            expect(mathEnforcer.sum(-1,-1)).to.eq(-2);
        })
        it('Check sum float numbers', () => {
            expect(mathEnforcer.sum(1.1,1.1)).to.eq(2.2);
        })
    })
})