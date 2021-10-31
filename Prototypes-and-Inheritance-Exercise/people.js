function solve() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
    }
    getSalary() {
      return this.salary;
    }
    work() {
      let current = this.tasks.shift();
      console.log(`${this.name}` + current);
      this.tasks.push(current);
    }
    collectSalary() {
      console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(" is working on a simple task.");
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(" is working on a complicated task.");
      this.tasks.push(" is taking time off work.");
      this.tasks.push(" is supervising junior workers.");
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(" scheduled a meeting.");
      this.tasks.push(" is preparing a quarterly report.");
    }
    getSalary() {
      return this.salary + this.dividend;
    }
  }
  return {
    Employee,
    Junior,
    Senior,
    Manager,
  };
}
solve();

const classes = solve();
const junior = new classes.Junior("Ivan", 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior("Alex", 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
