function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function getDollarFormatter(formatter) {
    return function (value) {
        return formatter(',', '$', true, value);
    }
}

function getEuroFormatter(formatter) {
    return function (value) {
        return formatter(',', '€', false, value); //Знакът за евро - като натиснеш левия Alt + 0128
    }
}

let dollars = getDollarFormatter(currencyFormatter);
let euro = getEuroFormatter(currencyFormatter);

console.log(euro(5345));
