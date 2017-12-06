let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

//console.log(Console.writeLine({type:"Fiat", model:"500", color:"white"}));

describe ("Console Sample", function () {
    it("with string parameter return correct value", function () {
        expect(Console.writeLine("Sum")).to.equal('Sum');
    });

    it("with object parameter return correct value", function () {
        let obj = {type:"Fiat", model:"500", color:"white"};
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj));
    });

    it("with 2 parameter not string first return error", function () {
        expect(() => Console.writeLine(3,4,5)).to.throw(TypeError,'No string format given!');
    });

    it("should throw error if no arguments were given", function () {
        expect(() => Console.writeLine()).to.throw(TypeError);
    });
    it("should throw a RangeError,if parameters are less or more than the placeholders", function () {
        let string = "I {0} {1}";
        expect(() => Console.writeLine(string, "miss", "you", "boy")).to.throw(RangeError);
    });
    it("should throw a RangeError,if invalid placeholder is given", function () {
        let string = "I {0} {12}";
        expect(() => Console.writeLine(string, "miss", "you")).to.throw(RangeError);
    });
    it("should successfully replace placeholders with valid parameters", function () {
        let string = "I {0} {1}";
        expect(Console.writeLine(string, "miss", "you")).to.equal("I miss you");
    });
    it("should recognize the placeholder numbers well", function () {
        expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });

})
