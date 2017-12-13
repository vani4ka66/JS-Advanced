let solution = (function() {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavor: 0
    };

    let products = {
        apple: {
            carbohydrate:1,
            flavor: 2
        },
        coke: {
            carbohydrate: 10,
            flavor: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavor: 3
        },
        omlet: {
            protein:5,
            fat: 1,
            flavor: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavor: 10
        }
    };

    return function (inputString) {
        let inputData = inputString.split(' ');
        let command = inputData[0];

        if(command === 'restock'){
            let microElement = inputData[1];
            let quantity = Number(inputData[2]);

            robot[microElement] += quantity;
            return ('Success')
        }
        else if (command === 'report'){
            return (`protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavor} `)
        }
        else if(command === 'prepare'){

            let selectedProduct = inputData[1];
            let selectedProductQuantity = Number(inputData[2]);
            let currentProductsStats = products[selectedProduct];

            let canProductBeCooked = true;

            for (let microElement in currentProductsStats) {
                if(currentProductsStats.hasOwnProperty(microElement)){
                    let microElementQuantity = currentProductsStats[microElement];
                    if(robot[microElement] < microElementQuantity * selectedProductQuantity){
                        canProductBeCooked = false;
                        return (`Error: not enough ${microElement} in stock`);
                        break;
                    }
                }
            }

            if(canProductBeCooked){
                for (let microElement in currentProductsStats) {
                    if(currentProductsStats.hasOwnProperty(microElement)){
                        let microElementQuantity = currentProductsStats[microElement];
                       robot[microElement] -= microElementQuantity * selectedProductQuantity;
                    }
                }

                return ('Siccess');
            }
        }
    }
})()

solution('restock carbohydrate 10');
solution('report');
