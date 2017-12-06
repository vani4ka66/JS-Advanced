let result = (function () {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this._ribbon = {
                    color: ribbonColor,
                    length: Number(ribbonLength)
            }
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }

    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
})()

let classes = result;

let test = new classes.BirthdayBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25, "Happy Birthday");
console.log(test.ribbon.color);
console.log(test.ribbon.length);
console.log(test.text)
