function solve(input) {

let result = '';

    for (let i of input) {

        let [command, text] = i.split(' ');
        if(command === 'append'){
            result += text;
        }
        else if(command === 'removeStart'){
            result = result.substring(Number(text));
        }
        else if(command === 'removeEnd'){
            result = result.substring(0, (result.length - Number(text)));

        }
    }
    console.log(result)
}
