let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe("Shared Object Unit Tests", function () {
    describe("Initial value tests", function () {
        it("Test name initial value to be null", function () {
            expect(sharedObject.name).to.be.null;
        });

        it("Test income initial value to be null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });

    describe("Change tests", function () {
        it("with empty string ()name should be null", function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });

        it("with non-empty string ()name should not be null", function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.equal('Pesho');
        });

        describe("Name input tests", function () {
            it("with empty string ()name should be null", function () {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.equal('Nakov')

            });

            it("with non-empty string ()name should not be null", function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.equal('Pesho');
            });
        })
    });

    describe("Change income tests", function () {
        it("with a string should stay null", function () {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });

        it("with a floating-point should stay 5", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(5);
        });

        it("with a negative number should stay 5", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-6);
            expect(sharedObject.income).to.be.equal(5);
        });

        it("with a zero should stay 5", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });

        it("with a negative number should stay 5", function () {
            sharedObject.changeIncome(6);
            expect(sharedObject.income).to.be.equal(6);
        });

        it("with a negative number should stay 5", function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(6);
            expect(sharedObject.income).to.be.equal(6);
        });

        describe("Income input tests", function () {
            it("with a string should not change", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("with a positive number should change", function () {
                sharedObject.changeIncome(5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("with a floating should not change", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(2.11);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("with a negative should not change", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-6);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });

            it("with a zero should not change", function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
        })
    });

    describe("UpdateName tests", function () {
        it("with an empty string should not change", function () {
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor');
        });

        it("with an non-empty string should change", function () {
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('Petar');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Petar');
        });

    });

    describe("Update Income tests ", function () {
        it("with a string should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("with a floating-point number should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(3.14);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("with a negative number should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(-6);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("with a zero should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });

        it("with a string should not change property", function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val(6);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(6);
        });
    })
})
