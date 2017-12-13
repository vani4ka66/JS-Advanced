function solve(worker) {

    let w = worker.weight;
    let e = worker.experience;
    let b = worker.bloodAlcoholLevel;
    let h = worker.handsShaking;

    if(worker.handsShaking){
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1;
        worker.handsShaking = false;
    }
    return worker;
}

let obj = { weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true 
};

console.log(solve(obj));
