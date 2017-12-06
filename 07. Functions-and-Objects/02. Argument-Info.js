function result() {

    let argumentTypes = {};

    for (let i of arguments) {
        console.log(`${typeof i}: ${i}`);
        if(!argumentTypes.hasOwnProperty( typeof i)){
            argumentTypes[typeof i] = 0;
        }
        argumentTypes[typeof i]++;
    }

    let arr = [];
    for (let k in argumentTypes) {
        arr.push([k, argumentTypes[k]] )
    }

    arr = arr.sort((a, b)=> {
        return b[1] - a[1];
    })

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let elem = arr[i + 1];
        let argum = element[0];
        let argCount = element[1];

        console.log(argum + " = " + argCount)
    }
}

//result('cat', 42, 35,  function () { console.log('Hello world!'); });
result(42, 'cat', 15, 'kitten', 'tomcat');
