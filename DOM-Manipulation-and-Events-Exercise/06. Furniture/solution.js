function solve() {
  //parse data
  const main = document.querySelector("#exercise");
  main.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON" && e.target.textContent == "Generate") {
      const input = document.querySelectorAll("textarea")[0];
      const data = JSON.parse(input.value);
      const tableMain = document.querySelector("tbody");
      for (const item of data) {
        let newRow = document.createElement("tr");
        // let nameCell = document.createElement("td");
        // let nameP = document.createElement("p");

        // let imgCell = document.createElement("td");
        // let imgTag = document.createElement("img");
        // imgTag.src = item.img;
        // imgCell.appendChild(imgTag);

        // nameP.textContent = item.name;
        // nameCell.appendChild(nameP);

        // let priceCell = document.createElement("td");
        // let priceP = document.createElement("p");
        // priceP.textContent = item.price;

        // priceCell.appendChild(priceP);

        // let decCell = document.createElement("td");
        // let decP = document.createElement("p");
        // decP.textContent = item.decFactor;

        // decCell.appendChild(decP);

        // let checkBox = document.createElement("td");
        // let checkTag = document.createElement("input");
        // checkTag.type = "checkbox";
        // checkBox.appendChild(checkTag);

        newRow.appendChild(makeCells("img", { src: item.img }));
        newRow.appendChild(makeCells("p", {}, item.name));
        newRow.appendChild(makeCells("p", {}, item.price));
        newRow.appendChild(makeCells("p", {}, item.decFactor));
        newRow.appendChild(makeCells("input", { type: "checkbox" }));

        tableMain.appendChild(newRow);
      }
    } else if (e.target.tagName == "BUTTON" && e.target.textContent == "Buy") {
      let total = 0;
      let decAvg = 0;
      let products = [];
      let output = document.querySelectorAll("textarea")[1];
      let allChecked = Array.from(
        document.querySelectorAll("input[type=checkbox]:checked")
      )
        .map((r) => r.parentElement.parentElement)
        .map((obj) => ({
          name: obj.children[1].textContent,
          price: Number(obj.children[2].textContent),
          decFactor: Number(obj.children[3].textContent),
        }));
      for (const item of allChecked) {
        total += item.price;
        products.push(item.name);
        decAvg += item.decFactor;
      }
      let result = `Bought furniture: ${products.join(", ")}\n`;
      result += `Total price: ${total.toFixed(2)}\n`;
      result += `Average decoration factor: ${decAvg / allChecked.length}`;

      output.value = result;
    }
  });
  function makeCells(tag, props, tagContent) {
    let cell = document.createElement("td");
    let nestedTag = document.createElement(tag);
    //console.log(props);
    //ако имаме подаден обект с някакво пропърти
    //го добавяме към елемента
    //в случая img tag има атрибут src ,което се явява пропърти за дадения обект
    // nestedTa[item]  е еквивалент на nestedTag.src
    for (const item in props) {
      nestedTag[item] = props[item];
    }
    if (tagContent) {
      nestedTag.textContent = tagContent;
    }
    cell.appendChild(nestedTag);
    return cell;
  }
}
