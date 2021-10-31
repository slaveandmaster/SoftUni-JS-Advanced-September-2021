function solve() {
  //TODO...
  let optionValue = document.querySelector("#selectMenuTo");
  let selected = document.getElementById("selectMenuTo");
  let selectOptions = ["binary", "hexadecimal"];
  let addOptions = (arr) =>
    arr.map((x) => {
      let newSelect = document.createElement("option");
      newSelect.value = x;
      newSelect.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`;
      return newSelect;
    });
  addOptions(selectOptions).forEach((element) => {
    optionValue.appendChild(element);
  });
  // function convert(to, n) {
  const formats = {
    binary,
    hexadecimal,
  };
  function binary(n) {
    return (n >>> 0).toString(2);
  }
  function hexadecimal(n) {
    return n.toString(16).toLocaleUpperCase();
  }

  let btn = document.querySelector("#container > button");
  btn.addEventListener("click", (e) => {
    let output = document.getElementById("result");
    let num = document.getElementById("input").value;
    let select = selected.value;
    num = Number(num) || 0;
    output.value = formats[select](num);
  });
}
