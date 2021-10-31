function solve() {
  let str = document.querySelector("#text").value;
  let strArray = str.split(' ').map((e) => e.toLowerCase());
  let convType = document.querySelector("#naming-convention").value;

  function toCamelCase(arr) {
    let result = '';
    for (let index = 0; index < arr.length; index++) {
      const currentWord = arr[index];
      let tempStr = currentWord;
      if (index !=0) {
        tempStr = tempStr.substr(0,1).toUpperCase() + tempStr.substr(1);
      }
      result+=tempStr;
    }
    return result;
  }
  function toPascalCase(arr) {
    let result = '';
    for (let index = 0; index < arr.length; index++) {
      let currentWord = arr[index];
      result+=currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
    }
    return result;
  }
  let converted = '';
  if (convType == "Camel Case") {
    converted = toCamelCase(strArray);
    document.querySelector('#result').textContent = converted;
  }
  else if (convType == "Pascal Case") {
    converted = toPascalCase(strArray);
    document.querySelector('#result').textContent = converted;
  }
  else {
    document.querySelector('#result').textContent = "Error!";
  }
}
