function solve(input) {

    let sum = 0;
    let product = 1;

    for (let num of input) {

        sum += Number(num);
        product *= Number(num);
    }
    console.log('Sum = ' + sum);
    console.log('Min = ' + Math.min(...input));
    console.log('Max = ' + Math.max(...input));
    console.log('Product = ' + product);
    console.log('Join = ' + input.join(''));
}

solve([2,3,10,5])
