function solve(oldCar) {

    if(oldCar.wheelsize % 2 == 0){
        oldCar.wheelsize = oldCar.wheelsize - 1
    }

    let vol = 0;
    let engine = 0;
    if(oldCar.power <= 90){
        vol = 1800;
        engine = 90;
    }
    else if(oldCar.power <= 120){
        vol = 2400;
        engine = 120;
    }
    else{
        vol = 3500;
        engine = 200;
    }
    let arr = [];
    arr.push(oldCar.wheelsize);
    arr.push(oldCar.wheelsize);
    arr.push(oldCar.wheelsize);
    arr.push(oldCar.wheelsize);



    let car = {
        model: oldCar.model,
        engine: {
            power: engine,
            volume: vol
        },
        carriage: {
            type: oldCar.carriage,
            color: oldCar.color
        }

    };

    car.wheels = arr;

    return car;
}

let obj = { model: 'VW Golf II',
    power: 130,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 16 };


console.log(solve(obj));
