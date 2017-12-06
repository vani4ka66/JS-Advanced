function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
        return sum;

}

let expect = require('chai').expect;

describe("Test summator", function () {
    it("Shoul return 3 for [1,2]", function () {
        let expected = 3;
        let actual = sum([1, 2]);
        expect(actual).to.equal(expected);
        //if(expected !== actual)
        //throw  new Error("3 != 1+2")
    })

    it("Shoul return 0 for []", function () {
        let expected = 0;
        let actual = sum([]);
        expect(actual).to.equal(expected);
    })

    it("Shoul return NaN", function () {
        let expected = 0;
        let actual = sum(['pesho', 1, 2]);
        expect(actual).to.be.NaN;
    })

    it("Shoul return 3.3", function () {
        let expected = 3.3;
        let actual = sum([1.1, 1.1, 1.1]);
        expect(actual).to.be.closeTo(3.3, 0.00001);
    })
})
