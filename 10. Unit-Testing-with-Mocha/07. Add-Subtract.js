function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}


describe("Calculator", () => {
    let calc;

    beforeEach(() => {
        calc = createCalculator();
    });

    it("should retutn an object", () => {
        let calc = createCalculator();
        expect(typeof calc).to.equal('object');
    });

    it("should have 0 value when created", () => {
        expect(calc.get()).to.equal(0);
    });

    it("should add", () => {
        calc.add(5);
        calc.add(3);
        expect(calc.get()).to.equal(8);
    });

    it("should subtract", () => {
        calc.subtract(5);
        expect(calc.get()).to.equal(-5);
    });

    it("should work with fractions", () => {
        calc.add(3.14)
        calc.subtract(3);
        expect(calc.get()).to.be.closeTo(0.14, 0.00001);
    });

    it("should work with negative numbers", () => {
        calc.add(-6)
        calc.subtract(-5);
        expect(calc.get()).to.be.equal(-1);
    });

    it("should return NaN for add", () => {
        calc.add('pesho')
        expect(calc.get()).to.be.NaN;
    });

    it("should return NaN for subtract", () => {
        calc.subtract('pesho')
        expect(calc.get()).to.be.NaN;
    });

    it("should return NaN for add as string", () => {
        calc.add('7')
        expect(calc.get()).to.be.equal(7);
    });

})
