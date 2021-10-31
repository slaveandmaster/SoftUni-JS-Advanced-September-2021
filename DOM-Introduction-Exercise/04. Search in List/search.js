function search() {
  // TODO
  //get all town by li tag
  let listTowns = Array.from(document.querySelectorAll("ul#towns > li"));
  //get search text value and result id
  let searchText = document.querySelector("#searchText").value;
  //iterate and search for matching string or word
  let result = document.querySelector("#result");
  //and then count,bold and underline the word
  let matches = 0;
  listTowns.forEach((town) => {
    let townName = town.textContent;
    if (searchText && townName.indexOf(searchText) >= 0) {
      town.innerHTML =`<bold><u>${townName}</u></bold>`;
      matches++;
    }
  });
  result.textContent = `${matches} matches found`;
}
