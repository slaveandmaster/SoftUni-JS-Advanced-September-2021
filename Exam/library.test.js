const { expect } = require('chai');
const { library } = require('./library');
describe("Tests …", function() {
    describe("Calc Price Of Book …", function() {
        it("Validate input", function() {
            expect(() => library.calcPriceOfBook('Book','year')).to.throw();
            expect(() => library.calcPriceOfBook(2, 2020)).to.throw();
            expect(() => library.calcPriceOfBook(2, "2020")).to.throw();
            expect(() => library.calcPriceOfBook(2, null)).to.throw();
            expect(() => library.calcPriceOfBook(null, 2020)).to.throw();
            expect(() => library.calcPriceOfBook(null, null)).to.throw();
            expect(() => library.calcPriceOfBook(['book'],2020)).to.throw();

        });
        it("Validate Book price" ,() => {
            expect(library.calcPriceOfBook('Book', 1980)).to.be.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 2020)).to.be.equal(`Price of Book is 20.00`);

        })
     });
     describe("Find Book …", function() {
        it("Test if array is empty", function() {
            expect(() => library.findBook([])).to.throw();
            
        });
        it("Test if find book or not", ()=> {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Torronto")).to.be.equal("We found the book you want.");
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Gost busters")).to.be.equal("The book you are looking for is not here!");
        })
     });
     describe("Arrange the Books …", function() {
        it("Validate input …", function() {
            // You need to validate the input, if the 
            // countBooks is not an integer number, or is a negative number
            // , throw an error: "Invalid input"
            expect(() =>library.arrangeTheBooks("5")).to.throw();
            expect(() =>library.arrangeTheBooks(-5)).to.throw();
            expect(() => library.arrangeTheBooks(null)).to.throw();
            expect(()=> library.arrangeTheBooks(undefined)).to.throw();
        });
        it("Check avaliable space for Book", () =>{
            expect(library.arrangeTheBooks(50)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            expect(library.arrangeTheBooks(20)).to.be.equal("Great job, the books are arranged.")
            expect(library.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.")
        })
     });
     
     // TODO: …
});
