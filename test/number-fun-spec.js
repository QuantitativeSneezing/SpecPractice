// Your code here
const chai = require("chai");
const expect = chai.expect;
const {returnsThree , reciprocal} = require("../problems/number-fun");
describe ("returnsThree()", ()=>{
    it ("should return three", ()=>{
        const returned= returnsThree();
        expect(returned).to.equal(3);
    });
});
describe ("reciprocal(number)", ()=>{
    it ("should return the reciprocal of a number", ()=>{
        const returned= reciprocal(10);
        expect(returned).to.equal(1/10);
    });
    it ("should throw an error if given a number greater than 1000000 or less than 1", () =>{
        const num1= 0;
        const num2= 1000001;
        expect(() => reciprocal(num1)).to.throw(TypeError);
        expect(() => reciprocal(num2)).to.throw(TypeError);
    });
});
