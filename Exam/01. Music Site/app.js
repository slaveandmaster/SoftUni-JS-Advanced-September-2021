window.addEventListener("load", solve);

function solve() {
  // •	All fields (genre, name, author, and date) are filled with the correct input
  // o	Genre, name, author, and date are non-empty strings
  // •	The program should not do anything if any of the input fields are empty.
  html = {
    fields: document.querySelectorAll(".container-text input"),
    btnAdd: document.querySelector("#add-btn"),
    sectionHits: document.querySelector(".all-hits-container"),
    savedHits: document.querySelector(".saved-container"),
    totalLikes: document.querySelector("#total-likes p"),
  };
  html.btnAdd.addEventListener("click", addSong);

  function addSong(e) {
    e.preventDefault();
    let [genre, name, author, date] = Array.from(html.fields).map(
      (x) => x.value
    );
    if (!genre || !name || !author || !date) {
      return;
    }
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("hits-info");
    let imgTag = makeTag("img", { src: "./static/img/img.png" });
    let genretag = makeTag("h2", {}, `Genre: ${genre}`);
    let nameTag = makeTag('h2', {}, `Name: ${name}`);
    let autorTag = makeTag("h2", {}, `Author: ${author}`);
    let dateTag = makeTag("h3", {}, `Date: ${date}`);
    let btnSave = makeTag("button", {}, "Save song");
    btnSave.classList.add("save-btn");
    let btnLike = makeTag("button", {}, "Like song");
    btnLike.classList.add("like-btn");
    let btnDelete = makeTag("button", {}, "Delete");
    btnDelete.classList.add("delete-btn");
    rowDiv.appendChild(imgTag);
    rowDiv.appendChild(genretag);
    rowDiv.appendChild(nameTag);
    rowDiv.appendChild(autorTag);
    rowDiv.appendChild(dateTag);
    rowDiv.appendChild(btnSave);
    rowDiv.appendChild(btnLike);
    rowDiv.appendChild(btnDelete);
    //     rowDiv.innerHTML = `<img src="./static/img/img.png"><h2>Genre: ${genre}</h2><h2>Name: ${name}</h2><h2>Author: ${author}</h2><h3>Date: ${date}</h3>
    // <button class="save-btn">Save song</button>
    // <button class="like-btn">Like song</button>
    // <button class="delete-btn">Delete</button>`

    html.sectionHits.appendChild(rowDiv);
    Array.from(html.fields).forEach((element) => {
      element.value = "";
    });

    btnLike.addEventListener("click", (e) => {
      e.preventDefault();
      
      let currentBtn = e.currentTarget;
      let totals = html.totalLikes.textContent.split(" ");
      let totalLikes = Number(totals[2]);
      totalLikes++;
      html.totalLikes.textContent = `Total Likes: ${totalLikes}`;
      currentBtn.disabled = "true";
      // console.log(e.currentTarget);
    });

    btnSave.addEventListener("click", (e) => {
      e.preventDefault();
      
      let [img, genre, name, author, date] = Array.from(
        e.currentTarget.parentElement.children
      );
      
      let saveDiv = makeTag("div");
      saveDiv.classList.add("hits-info");
      let imgSaved = makeTag("img", { src: "./static/img/img.png" });
      let genretag = makeTag("h2", {}, `${genre.textContent}`);
      let nameTag = makeTag("h2", {}, `${name.textContent}`);
      let authTag = makeTag("h2", {}, `${author.textContent}`);
      let dateTag = makeTag("h3", {}, `${date.textContent}`);
      let delSaved = makeTag("button", {}, "Delete");
      delSaved.classList.add("delete-btn");
      saveDiv.appendChild(imgSaved);
      saveDiv.appendChild(genretag);
      saveDiv.appendChild(nameTag);
      saveDiv.appendChild(authTag);
      saveDiv.appendChild(dateTag);
      saveDiv.appendChild(delSaved);
      html.savedHits.appendChild(saveDiv);
      e.currentTarget.parentElement.remove();
      delSaved.addEventListener("click", deleteRecord);
    });
    btnDelete.addEventListener("click", deleteRecord);
  }
  function deleteRecord(e) {
    e.preventDefault();
    //console.log(e.currentTarget)
    e.currentTarget.parentElement.remove();
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
}
