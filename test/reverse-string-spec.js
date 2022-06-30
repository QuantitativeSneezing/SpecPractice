// Your code here
const chai = require("chai");
const expect = chai.expect;
const reverseString= require("../problems/reverse-string")
describe("reverseString(string)", () => {
    it("should return the reversed string", () => {
      const nuf = reverseString("fun");
      expect(nuf).to.equal("nuf");
    });
    it("should throw an error if string is not type of string", () => {
        const num = 1;
        const object = { i: "am", an: "object" };
        const array = ["i", "am", "an", "array"];

        expect(() => reverseString(num)).to.throw(TypeError);
        expect(() => reverseString(object)).to.throw(TypeError);
        expect(() => reverseString(array)).to.throw(TypeError);
      });
});
