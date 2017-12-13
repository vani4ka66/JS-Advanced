(function solve() {

    String.prototype.isEmpty = function () {
        return this == '';
    };

    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }
        else {
            return str + this.toString();
        }
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }
        else {
            return this.toString() + str;
        }
    };

    String.prototype.truncate = function (n) {
        if(this.length <= n){
            return this.toString();
        }
        if(n < 4){
            return '.'.repeat(n);
        }
        if (!this.includes(' ')){
          return this.slice(0, n-3).concat('...');
        }

        let tokens = this.split(' ');
        let result = tokens[0];

        for (let i = 1; i < tokens.length; i++) {
            if(result.length + tokens[i].length + 4 > n){
                return result + '...'
            }

            result += ` ${tokens[i]}`;
        }
    };

    String.format = function (str, ...params) {
       return str.replace(/\{([\d]+)\}/g, function (m, g) {
           if(params[Number(g)] != undefined){
               return params[Number(g)]
           }
           return m;
       });
    }

})();


let str = 'the {0} quick brown fox jumps over the lazy dog';

//console.log(str.ensureStart('hello'));
console.log(str.truncate(10));
console.log(String.format(str, 'hello'));
