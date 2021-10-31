function extensibleObject() {
  let obj = {
    extend: function (template) {
      for (let props of Object.keys(template)) {
        if (typeof template[props] == "function") {
          Object.getPrototypeOf(obj)[props] = template[props];
        } else {
          obj[props] = template[props];
        }
      }
    },
  };

  return obj;
}

function extensibleObject() {
  let obj = {
    extend: function (template) {
      for (let parentProp of Object.keys(template)) {
        if (typeof template[parentProp] == "function") {
          Object.getPrototypeOf(obj)[parentProp] = template[parentProp];
        } else {
          obj[parentProp] = template[parentProp];
        }
      }
    },
  };

  return obj;
}
const myObj = extensibleObject();

const template = {
  extensionMethod: function () {},
  extensionProperty: "someString",
};
myObj.extend(template);
console.log(myObj);
