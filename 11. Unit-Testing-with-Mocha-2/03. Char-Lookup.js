let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("LookupChar", function () {
    it("with a non-string first parameter, should return undefined", function () {
        expect(lookupChar(13,0)).to.equal(undefined);
    });

    it("with a non-number second parameter, should return undefined", function () {
        expect(lookupChar('pesho','gosho')).to.equal(undefined);
    });

    it("with a floating-point second parameter, should return undefined", function () {
        expect(lookupChar('pesho',3.14)).to.equal(undefined);
    });

    it("with an incorrect index value, should return Incorrect index", function () {
        expect(lookupChar('pesho',13)).to.equal('Incorrect index');
    });

    it("with an negative index value, should return Incorrect index", function () {
        expect(lookupChar('pesho',-1)).to.equal('Incorrect index');
    });

    it("with an incorrect index value equal to string length, should return Incorrect index", function () {
        expect(lookupChar('pesho',5)).to.equal('Incorrect index');
    });

    it("with correct values, should return Incorrect index", function () {
        expect(lookupChar('pesho',0)).to.equal('p');
    });

    it("with correct values, should return Incorrect index", function () {
        expect(lookupChar('stamat',3)).to.equal('m');
    });

})
