let result = (function () {
    class Employee {
        constructor(name, age, salary = 0) {
            if(new.target === Employee){
                throw  new Error('Cannot instance directly.')
            }
            this.name = name;
            this.age = age;
            this.salary = Number(salary);
            this.tasks = [];
        }


        work() {
            let currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age, salary) {
            super(name, age, salary);
            this.tasks.push(' is working on a simple task.')
        }
    }

    class Senior extends Employee {
        constructor(name, age, salary) {
            super(name, age, salary);
            this.tasks.push(' is working on a complicated task.');
            this.tasks.push(' is taking time off work.');
            this.tasks.push(' is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age, salary, dividend = 0) {
            super(name, age, salary);
            this.dividend = Number(dividend);
            this.tasks.push(' scheduled a meeting.');
            this.tasks.push(' is preparing a quarterly report.');
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return {
        Employee, Junior, Senior, Manager
    };
})()

let junior = result.Manager;
let p = new junior('Pesho', 35)
p.collectSalary();
p.salary = 3000;
p.collectSalary(); // Pesho recieved 3000 this month.
p.divident = 300;
p.collectSalary();
//console.log(p)
//p.work(); // Pesho is working on a simple task

