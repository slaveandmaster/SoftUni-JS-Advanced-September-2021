window.addEventListener("load", solve);
function solve() {
    let html = {
      fields: document.querySelectorAll("form > input"),
      btnAdd: document.querySelector("form > button"),
      tableBody: document.querySelector("#furniture-list"),
      totalPrice: document.querySelector(".total-price"),
      descrContent: document.querySelector("#description"),
    };
  
    html.btnAdd.addEventListener("click", add);
  
    function add(e) {
      e.preventDefault();
  
      let [model, year, price] = Array.from(html.fields).map((x) => x.value);
      let desc = html.descrContent.value;
      if (!model || !year || !desc || !price || Number(price) < 0 || Number(year) < 0) {
        return;
      } else {
        //create tr
        let row = makeTag('tr', {});
        row.classList.add("info");
        //create cells
        let tdName = makeTag('td', {}, model);
        let tdPrice = makeTag('td', {}, (Number(price)).toFixed(2));
        let tdActions = makeTag('td', {});
        let moreBtn = makeTag('button', {}, 'More Info');
        let buyBtn = makeTag('button', {}, 'Buy it');
        moreBtn.classList.add("moreBtn");
        buyBtn.classList.add("buyBtn");
        tdActions.appendChild(moreBtn);
        tdActions.appendChild(buyBtn);
        let hideContent = makeTag('tr', {});
        hideContent.classList.add("hide");
        //hideContent.style.display = 'contents';
        let tdYear = makeTag('td', {}, `Year: ${year}`);
        let tdDesc = makeTag('td', {}, `Description: ${desc}`);
        tdDesc.setAttribute('colspan', 3);
        hideContent.appendChild(tdYear);
        hideContent.appendChild(tdDesc);
        row.appendChild(tdName);
        row.appendChild(tdPrice);
        row.appendChild(tdActions);
        html.tableBody.appendChild(row);
        html.tableBody.appendChild(hideContent);
        //clear all input fields
        Array.from(html.fields).forEach((x) => (x.value = ""));
        html.descrContent.value = "";
        moreBtn.addEventListener("click", (e) => {
          e.preventDefault();
          if (moreBtn.textContent == "More Info") {
            moreBtn.textContent = "Less Info";
            hideContent.style.display = "contents";
          } else {
            moreBtn.textContent = "More Info";
            hideContent.style.display = "none";
          }
        });
        buyBtn.addEventListener("click", (e) => {
          e.preventDefault();
          let tr = e.currentTarget.parentElement.parentElement;
          let hiddenRow = tr.nextSibling;
          let price = Number(tr.children[1].textContent);
          html.totalPrice.textContent = (
            Number(html.totalPrice.textContent) + price
          ).toFixed(2);
          hiddenRow.remove();
          tr.remove();
        });
      }
    }
    function makeTag(tag, props, textContent) {
      let element = document.createElement(tag);
      for (const prop in props) {
        element[prop] = props[prop];
      }
      if (textContent) {
        element.textContent = textContent;
      }
      return element;
    }
    //TO DO
  }
