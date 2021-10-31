function solve() {
  const html = {
    formField: document.querySelectorAll("#container > input[type=text]"),
    formBtn: document.querySelector("#container > button"),
    ul: document.querySelector("#movies > ul"),
    archiveList: document.querySelector("#archive > ul"),
    clearBtn: document.querySelector("#archive > button"),
  };

//   function makeTag(tag, typeTag, props, tagContent) {
//     let element = document.createElement(tag);
//     for (const prop in props) {
//       element[prop] = props[prop];
//     }
//     if (tagContent) {
//       element.textContent = tagContent;
//     }
//     if (typeTag) {
//       element.type = typeTag;
//     }

//     //parentTag.appendChild(element);
//     return element;
//   }
  html.formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      html.formField[0].value == "" ||
      html.formField[1].value == "" ||
      html.formField[2].value == ""
    ) {
      return;
    }
    if (isNaN(html.formField[2].value)) {
      return;
    }
    let liElement = document.createElement("li");
    let liSpan = document.createElement("span");
    liSpan.textContent = html.formField[0].value;
    let liStrong = document.createElement("strong");
    liStrong.textContent = `Hall: ${html.formField[1].value}`;

    liElement.appendChild(liSpan);
    liElement.appendChild(liStrong);

    let newDiv = document.createElement("div");
    let divStrong = document.createElement("strong");
    divStrong.textContent = html.formField[2].value;
    let divInput = document.createElement("input");
    divInput.type = "text";
    divInput.setAttribute("placeholder", "Tickets Sold");
    let divBtn = document.createElement("button");
    divBtn.textContent = "Archive";
    newDiv.appendChild(divStrong);
    newDiv.appendChild(divInput);
    newDiv.appendChild(divBtn);

    liElement.appendChild(newDiv);
    html.ul.appendChild(liElement);
    //experiment with function makeTag
    // let testLi = makeTag("li", "", "", "");
    // testLi.appendChild(makeTag("span", "", "", html.formField[0].value));
    // testLi.appendChild(
    //   makeTag("strong", "", "", `Hall: ${html.formField[1].value}`)
    // );
    // let myDiv = makeTag("div", "", "", "");

    // myDiv.appendChild(makeTag("strong", "", "", html.formField[2].value));
    // myDiv.appendChild(
    //   makeTag("input", "text", { placeholder: "Tickets Sold" }, "")
    // );
    // myDiv.appendChild(makeTag("button", "", "", "Archive"));

    // testLi.appendChild(myDiv);
    // html.ul.appendChild(testLi);

    html.formField[0].value = "";
    html.formField[1].value = "";
    html.formField[2].value = "";
    divBtn.addEventListener("click", (e) => {
      if (isNaN(divInput.value) || divInput.value == "") {
        return;
      }
      let totalPrice = Number(divStrong.textContent) * Number(divInput.value);
      let movieName =
        e.currentTarget.parentElement.parentElement.firstChild.textContent;
      let liArchive = document.createElement("li");
      let liContent = document.createElement("span");
      liContent.textContent = movieName;
      let priceMovie = document.createElement("strong");
      priceMovie.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
      let delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      liArchive.appendChild(liContent);
      liArchive.appendChild(priceMovie);
      liArchive.appendChild(delBtn);
      html.archiveList.appendChild(liArchive);

      e.currentTarget.parentElement.parentElement.remove();

      delBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.currentTarget.parentElement.remove();
      });
    });
    html.clearBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // let list = e.parentElement.parentElement.children[1].children;
      let list = Array.from(html.archiveList.children);
      for (const item of list) {
        item.remove();
      }
    });
  });
  //   function add() {
  //   }
}
