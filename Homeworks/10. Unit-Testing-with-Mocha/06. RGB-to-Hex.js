function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


let expect = require('chai').expect;

describe("RGB To Hex Color", () => {
    it("should return #FF9EAA FOR (255, 158, 170)", () => {
        expect(rgbToHexColor(255,158,170)).to.equal('#FF9EAA');
    });

    it("should pad values with zeroes", () => {
        expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
    });

    it("should work at lower limit", () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it("should work at upper limit", () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it("should return undefined for negative values", () => {
        expect(rgbToHexColor(-1,5,18)).to.equal(undefined);
    });

    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
    });

    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(15, 256, 255)).to.equal(undefined);
    });

    it("should return undefined for values greater than 255", () => {
        expect(rgbToHexColor(18, 20, 256)).to.equal(undefined);
    });

    it("should return undefined for fractions", () => {
        expect(rgbToHexColor(3.14, 255, 255)).to.equal(undefined);
    });

    it("should return undefined for wrong values", () => {
        expect(rgbToHexColor('pesho', 255, 255)).to.equal(undefined);
    });

})
