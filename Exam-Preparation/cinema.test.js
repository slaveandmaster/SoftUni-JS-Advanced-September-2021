const { expect } = require('chai');
const { cinema } = require('./cinema');

describe("Tests …", function() {
    describe("Show Movie Checks …", function() {
        it("return empty array", function() {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        });
        it('Expected to return array with comma separate vaues', () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.be.equal('King Kong, The Tomorrow War, Joker')
        })
        it('Expected to return array with oone values', () => {
            expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        })
        it('Expected to return array with empty value', () => {
            expect(cinema.showMovies([''])).to.be.equal('')
        })
     });
     // TODO: …
     describe("ticket Price Checks …", function() {
        it("Check projection type price", function() {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.0);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.5);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
        });
        it("Check for throw error", () => {
            expect(() => cinema.ticketPrice('Invalid')).to.throw();
            expect(() => cinema.ticketPrice('1')).to.throw();
            expect(() => cinema.ticketPrice()).to.throw();
        })
     });
     describe("swapSeatsInHall Checks …", function() {
        it("Check params is a Number", function() {
            expect(cinema.swapSeatsInHall('2','20')).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall('2',20)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2,'20')).to.be.eq("Unsuccessful change of seats in the hall.");
            
        });
        it('Check if numbers are equal', ()=>{
            expect(cinema.swapSeatsInHall(2,2)).to.be.eq("Unsuccessful change of seats in the hall.");

        })
        it('Check if numbers are less then 0 or equal to 0', ()=>{
            expect(cinema.swapSeatsInHall(0,2)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2,0)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1,2)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2,-1)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-1,-2)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0,0)).to.be.eq("Unsuccessful change of seats in the hall.");

        })
        it('Check if numbers are greater than 20',()=>{
            expect(cinema.swapSeatsInHall(21,2)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2,21)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(21,21)).to.be.eq("Unsuccessful change of seats in the hall.");


        })
        it('Check if numbers are integers',()=>{
            expect(cinema.swapSeatsInHall(2.5,6.5)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2.5,6)).to.be.eq("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(2,6.5)).to.be.eq("Unsuccessful change of seats in the hall.");

        })
        it('Check for successful change of seats', () =>{
            expect(cinema.swapSeatsInHall(2,20)).to.be.eq("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5,2)).to.be.eq("Successful change of seats in the hall.");
            
        })

     });
});
