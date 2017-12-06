let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


let expect = require('chai').expect;

describe("Math Enforcer Unit Tests", function () {
    describe("addFive", function () {
        it("with a string - should return undefined", function () {
            let result = mathEnforcer.addFive('nakov');
            expect(result).to.be.undefined;
        });

        it("with a positive number - should return result + 5", function () {
            let result = mathEnforcer.addFive(6);
            expect(result).to.equal(11);
        });

        it("with a negative number - should return result + 5", function () {
            let result = mathEnforcer.addFive(-6);
            expect(result).to.equal(-1);
        });

        it("with a floating point number - should return result", function () {
            let result = mathEnforcer.addFive(6.6);
            expect(result).to.be.closeTo(11.6, 0.01);
        });
    });

    describe("subtractTen", function () {
        it("with a string - should return undefined", function () {
            let result = mathEnforcer.subtractTen('nakov');
            expect(result).to.be.undefined;
        });

        it("with a positive number - should return result -10", function () {
            let result = mathEnforcer.subtractTen(6);
            expect(result).to.equal(-4);
        });

        it("with a negative number - should return result -10", function () {
            let result = mathEnforcer.subtractTen(-6);
            expect(result).to.equal(-16);
        });

        it("with a floating point number - should return result - 10", function () {
            let result = mathEnforcer.subtractTen(10.10);
            expect(result).to.be.closeTo(0.10, 0.01);
        });
    });

    describe("Sum", function () {
        it("first num is a string should return undefined", function () {
            let result = mathEnforcer.sum('nakov', 5);
            expect(result).to.equal(undefined)
        });

        it("first num is a string should return undefined", function () {
            let result = mathEnforcer.sum(5, 'nakov');
            expect(result).to.equal(undefined)
        });

        it("two positive numbers should return result", function () {
            let result = mathEnforcer.sum(5, 6);
            expect(result).to.equal(11)
        });

        it("two negative numbers should return result", function () {
            let result = mathEnforcer.sum(-5, -6);
            expect(result).to.equal(-11)
        });

        it("two floating point numbers should return result", function () {
            let result = mathEnforcer.sum(5.5, 6.6);
            expect(result).to.be.closeTo(12.1, 0.01)
        });
    })
})
