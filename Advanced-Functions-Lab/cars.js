function cars(arrStr) {
  const data = arrStr;
  let obj = {};
  const operations = {
    create,
    set,
    print,
  };
  data.forEach((element) => {
    let [cmd, obj1, action, obj2] = element.split(" ");
    operations[cmd](obj1, action, obj2);
  });
  function create(obj1, action, obj2) {
    if (action == "inherit") {
      obj[obj1] = Object.create(obj[obj2]);
    } else {
      obj[obj1] = {};
    }
  }
  function set(name, key, value) {
    obj[name][key] = value;
  }

  function print(name) {
    let result = [];
    for (const key in obj[name]) {
      result.push(`${key}:${obj[name][key]}`);
    }
    console.log(result.join(","));
  }
}
cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
