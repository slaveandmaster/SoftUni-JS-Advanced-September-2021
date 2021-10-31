function solve() {
  // Each new registered pet must have a Name, Age, Kind and Current Owner.
  //check if all fields are filled
  //check age is a Number..If all requirements are done
  //we can add pet to adoption list
  html = {
    adopSectionList: document.querySelector("#adoption ul"),
    inputs: document.querySelectorAll("#add input"),
    adopted: document.querySelector("#adopted ul"),
  };

  let btnAdd = document.querySelector("#add button");
  btnAdd.addEventListener("click", addPet);
  function addPet(e) {
    e.preventDefault();
    let [name, age, kind, owner] = Array.from(html.inputs).map((x) => x.value);
    if (!name || !age || !kind || !owner || isNaN(age)) {
      return;
    } else {
      let liElement = document.createElement("li");
      let liParagraph = document.createElement("p");
      liParagraph.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;

      let spanOwner = document.createElement("span");
      spanOwner.textContent = `Owner: ${owner}`;
      let btnOwner = document.createElement("button");
      btnOwner.textContent = "Contact with owner";
      liElement.appendChild(liParagraph);

      liElement.appendChild(spanOwner);
      liElement.appendChild(btnOwner);
      html.adopSectionList.appendChild(liElement);

      html.inputs[0].value = "";
      html.inputs[1].value = "";
      html.inputs[2].value = "";
      html.inputs[3].value = "";
      //add eventlistener for adopt.
      btnOwner.addEventListener("click", (e) => {
        e.preventDefault();
        //get current element
        let currentElement = e.currentTarget.parentElement;
        let newDiv = document.createElement("div");
        let newInput = document.createElement("input");
        newInput.type = "text";
        newInput.setAttribute("placeholder", "Enter your names");
        newDiv.appendChild(newInput);
        //change button text Content
        btnOwner.textContent = "Yes! I take it!";
        newDiv.appendChild(btnOwner);
        currentElement.appendChild(newDiv);
      //event to change owner
        btnOwner.addEventListener("click", () => {
          e.preventDefault();
          if (newInput.value == "") {
            return;
          }
          let liElement = document.createElement("li");
          let liParagraph = document.createElement("p");
          liParagraph.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;

          let spanOwner = document.createElement("span");
          spanOwner.textContent = `New Owner: ${newInput.value}`;
          let btnChecked = document.createElement("button");
          btnChecked.textContent = "Checked";
          liElement.appendChild(liParagraph);

          liElement.appendChild(spanOwner);
          liElement.appendChild(btnChecked);
          html.adopted.appendChild(liElement);
          e.target.parentElement.parentElement.parentElement.remove();

          btnChecked.addEventListener("click", (e) => {
            e.preventDefault();
            e.currentTarget.parentElement.remove();
          });
        });
      });
    }
  }
}
// function createTag(tagName,props,type,textContent) {
//     let element = document.createElement(tagName);
//     for (const prop of props) {
//         element[prop] = props[prop];
//     }
//     if (type) {
//         element.type = type;
//     }
//     if (textContent) {
//         element.textContent = textContent;
//     }
//     return element
// }