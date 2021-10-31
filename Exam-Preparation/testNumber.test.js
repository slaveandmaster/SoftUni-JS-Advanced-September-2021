const { expect } = require("chai");
const { testNumbers } = require("./TestNumbers");
describe("Tests …", function () {
  describe("Sum numbers …", function () {
    it("Check if params are numbers", function () {
      expect(testNumbers.sumNumbers(2, "1")).to.equals(undefined);
      expect(testNumbers.sumNumbers("1", 4)).to.equals(undefined);
      expect(testNumbers.sumNumbers("1", "4")).to.equals(undefined);
    });
    it("Check if params are numbers", function () {
      expect(testNumbers.sumNumbers(2, null)).to.equals(undefined);
      expect(testNumbers.sumNumbers(null, 4)).to.equals(undefined);
      expect(testNumbers.sumNumbers(null, null)).to.equals(undefined);
    });
    it("Check if params are numbers", function () {
      expect(testNumbers.sumNumbers(2, 4)).to.equals("6.00");
    });
    it("Numbers can be positive or negative", function () {
      expect(testNumbers.sumNumbers(2, -4)).to.equals("-2.00");
    });
    it("Numbers can be positive or negative", function () {
      expect(testNumbers.sumNumbers(1.2, 2.4)).to.equals("3.60");
    });
    it("Numbers can be positive or negative", function () {
      expect(testNumbers.sumNumbers(1.333, 2.557)).to.equals("3.89");
    });
  });
  describe("Number Cheker", () => {
    it("Check if even or odd", function () {
      expect(testNumbers.numberChecker(2)).to.contains("even");
      expect(testNumbers.numberChecker(1)).to.contains("odd");
    });
    it("parse number from string", function () {
      expect(testNumbers.numberChecker("2")).to.contains("even");
      expect(testNumbers.numberChecker("1")).to.contains("odd");
    });
    it("parse number from string", function () {
      expect(testNumbers.numberChecker("")).to.contains("even");
    });
    it("Check throw", function () {
      expect(() => testNumbers.numberChecker("s")).to.throw();
    });
  });

  describe("Average Sum Array", () => {
    it("Check average sum", () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
    });
    it("Check average sum", () => {
      expect(testNumbers.averageSumArray([1.5, 2.5, 3.5, 4.5])).to.equal(3);
    });
    it("Check average sum", () => {
      expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
    });
  });
});
