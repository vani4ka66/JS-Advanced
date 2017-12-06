class Person{

        constructor(name, email){
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }



function extendPrototype(Class) {
        Class.prototype.species = "Human";
        Class.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this.toString()}`;
        }
}


extendPrototype(Person);
let p = new Person('Vania', 'vani4ka66@abv.bg');
let v = new Person();
Person.prototype.species = "Garga"
console.log(p.toSpeciesString());
p.species = 'Crocodile';
console.log(p.species); // Crocodile
console.log(v.species); // Garga
