let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("isOddOrEven", function () {
    it("with a number parameter, should return undefined", function () {
        expect(isOddOrEven(13)).to.equal(undefined);
    });

    it("with an object parameter, should return undefined", function () {
        expect(isOddOrEven({name:"pesho"})).to.equal(undefined);
    });

    it("with a string parameter, should return even", function () {
        expect(isOddOrEven('mama')).to.equal('even');
    });

    it("with a number parameter, should return undefined", function () {
        expect(isOddOrEven(13)).to.equal(undefined);
    });

    it("with multiple consecutive checks, should return correct values", function () {
        expect(isOddOrEven('cat')).to.equal('odd');
        expect(isOddOrEven('alabala')).to.equal('odd');
        expect(isOddOrEven('is it even')).to.equal('even');

    });
})
