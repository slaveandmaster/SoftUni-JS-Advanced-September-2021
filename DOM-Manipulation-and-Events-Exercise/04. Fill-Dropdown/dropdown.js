function addItem() {
  const newItemText = document.getElementById("newItemText");
  const newItemValue = document.getElementById("newItemValue");
  function makeOptions(newItemText, newItemValue) {
    const menu = document.getElementById("menu");
    const newOptions = document.createElement("option");
    newOptions.textContent = newItemText.value;
    newOptions.value = newItemValue.value;
    menu.appendChild(newOptions);
  }
  makeOptions(newItemText, newItemValue);
  newItemText.value = "";
  newItemValue.value = "";
}
