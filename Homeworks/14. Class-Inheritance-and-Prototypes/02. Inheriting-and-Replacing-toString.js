let result = (function toStringExtension() {
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

    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }

        toString(){
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }

        toString(){
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`
        }
    }

    return {
        Person, Student, Teacher
    }
})()

let res1 = result.Person;
let p = new res1("Maria", "maria@gmail.com");
console.log('' + p);
// Person (name: Maria, email: maria@gmail.com)

let res2 = result.Teacher;
let t = new res2("Ivan", "iv@yahoo.com", "PHP");
console.log('' + t);
// Teacher (name: Ivan, email: iv@yahoo.com, subject: PHP)

let res3 = result.Student;
let s = new res3("Ana", "ana@mail.ru", 3);
console.log('' + s);
// Student (name: Ana, email: ana@mail.ru, course: 3)
