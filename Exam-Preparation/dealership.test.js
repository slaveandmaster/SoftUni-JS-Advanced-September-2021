const { expect } = require('chai');
const { dealership } = require('./dealership');
describe("Tests …", function() {
    describe("newCarCost", function() {

        it("Check if old car exist …", function() {
            expect(dealership.newCarCost("Audi A4 B8", 30000)).to.be.equal(15000);
            expect(dealership.newCarCost("Audi 80", 1000)).to.be.equal(1000);
        });
     });
     describe("carEquipment", function() {

        it("Check extas …", function() {
            //expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[1,2,3])).to.have.deep.members(['heated seats', 'navigation']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'],[0,3])).deep.equal(['heated seats', 'navigation']);
        });
     });
     describe("euroCatecory Checker", function() {

        it("Check for cateory 4 ", () => {
            expect(dealership.euroCategory(4)).to.be.equal(`We have added 5% discount to the final price: 14250.`);
        } )
        it('Check for category above 4' ,() => { 
            expect(dealership.euroCategory(5)).to.be.equal(`We have added 5% discount to the final price: 14250.`);
        })
        it('Check for category below 4' ,() => {
            expect(dealership.euroCategory(3)).to.be.equal(`Your euro category is low, so there is no discount from the final price!`);
            expect(dealership.euroCategory(2)).to.be.equal(`Your euro category is low, so there is no discount from the final price!`);
            expect(dealership.euroCategory(1)).to.be.equal(`Your euro category is low, so there is no discount from the final price!`);   
        });
     });
     // TODO: …
});
