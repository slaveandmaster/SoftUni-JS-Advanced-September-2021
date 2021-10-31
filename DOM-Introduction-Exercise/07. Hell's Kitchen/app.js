function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let data = document.querySelector("#inputs textarea").value;
    let resultRest = document.querySelector("#bestRestaurant p");
    let resultWorkers = document.querySelector("#workers p");
    let parseData = JSON.parse(data);
    //get input data and create arr or object with restaraunts and workers
    let obj = {};
    //let t = {};
    parseData.forEach((element) => {
      let [restaraunt, ...workers] = element.split(" - ");
      if (!obj.hasOwnProperty(restaraunt)) {      
      obj[restaraunt] = [];
      //t[restaraunt] = [];
      workers.map((w) => {
        workers = w.split(", ");
        workers.map((x) => {
          let [worker, salary] = x.split(" ");
          salary = Number(salary);
          obj[restaraunt].push({ worker, salary });
          //t[restaraunt].push({ [worker]: salary });
        });
      });
    }
    else {
      workers.map((w) => {
        workers = w.split(", ");
        workers.map((x) => {
          let [worker, salary] = x.split(" ");
          salary = Number(salary);
          obj[restaraunt] = [...obj[restaraunt], ...[{worker, salary}]];
          //t[restaraunt].push({ [worker]: salary });
        });
      });
    }
    });
    //get the best restaraunt with average salary
    let bestRest = Object.entries(obj);
    //get restaraunt workers salary
    bestRest.map((row) => {
      let staff =
        Object.entries(row[1]).reduce(
          (acc, v) => acc + Number(v[1].salary),
          0
        ) / row[1].length;
      obj[row[0]].avrSalary = staff.toFixed(2);
    });
    //sort by average salary
    let result = Object.entries(obj)
      .sort(([a, restA], [b, restB]) => {
        return restB.avrSalary - restA.avrSalary;
      })
    let allWorkers = [];
    //sort by salary
    let s = result[0][1].sort((a,b) => b.salary - a.salary);
    result[0][1].forEach((x) =>
      allWorkers.push(`Name: ${x.worker} With Salary: ${x.salary}`)
    );
    resultRest.innerHTML = `Name: ${result[0][0]} Average Salary: ${result[0][1].avrSalary} Best Salary: ${result[0][1][0].salary.toFixed(2)}`;
    //get the best worker
    resultWorkers.innerHTML = allWorkers.join(" ");
  }
}
