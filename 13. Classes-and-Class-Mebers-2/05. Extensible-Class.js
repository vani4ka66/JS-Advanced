let extensible = (function () {
    let id = 0;

    return class Extensible{
        constructor(){
            this.id = id++;
        }

        extend(template){
            for (let prop in template) {
                if(typeof template[prop] === 'function'){
                    Extensible.prototype[prop] = template[prop]
                }
                else{
                    this[prop] = template[prop];
                }
            }
        }
    }
})()

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();

template = {
    extentionMethod: function () {
        console.log('Hello');
    },
    extensionProperty: 'something'
};

console.log(obj1.id);    //0
console.log(obj2.id);    //1
console.log(obj3.id);    //2

obj3.extend(template);
console.log(obj3.extensionProperty)  //something
obj3.extentionMethod(template)       //Hello

