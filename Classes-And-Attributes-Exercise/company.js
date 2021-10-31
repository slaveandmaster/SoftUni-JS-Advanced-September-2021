class Company {
  constructor() {
    this.departments = [];
  }
  calcAverage(department) {
    let avrSum = this.departments[department].reduce((acc, current) => {
      return acc + current.salary / this.departments[department].length;
    }, 0);
    return (this.departments[department]["avrSum"] = Number(avrSum));
  }
  addEmployee(name, salary, position, department) {
    if (
      [...arguments].some((e) => e == null || e == "" || e == undefined) ||
      salary < 0
    ) {
      throw new Error("Invalid input!");
    } else {
      let newEmployer = {
        name: name,
        salary: Number(salary),
        position: position,
      };
      if (!this.departments[department]) {
        this.departments[department] = [];
      }
      this.departments[department].push(newEmployer);
    }
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }
  bestDepartment() {
    let allDepartments = Object.keys(this.departments);
    allDepartments.forEach((e) => this.calcAverage(e));
    let sorted = Object.entries(this.departments).sort((a, b) => {
      let keysA = a[0];
      let valuesA = a[1];
      let keysB = b[0];
      let valuesB = b[1];
      return valuesB.avrSum - valuesA.avrSum;
    });
    let avg = `Average salary: ${sorted[0][1].avrSum.toFixed(2)}`;
    delete sorted[0][1].avrSum;
    let persons = Object.values(sorted[0][1]).sort((a, b) => {
      let keyA = a.salary;
      let keyB = b.salary;
      let nameA = a.name;
      let nameB = b.name;
      return keyB - keyA || nameA.localeCompare(nameB);
    });
    return `Best Department is: ${sorted[0][0]}
${avg}
${persons
  .map((x) => [x.name, x.salary, x.position])
  .map((y) => y.join(" "))
  .join("\n")}`;
    // return row;
  }
}
let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
