function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    //   TODO:
    let searchText = document.querySelector("#searchField").value;
    let rows = Array.from(document.querySelectorAll("tbody > tr > td"));
    rows.map((row) => (row.parentElement.className = ""));
    rows.forEach((row) => {
      if (searchText && row.textContent.indexOf(searchText) >= 0) {
        row.parentElement.className = "select";
      }
    });
  }
}
