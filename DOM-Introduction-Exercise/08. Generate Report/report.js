function generateReport() {
  //TODO
  let htmlOutput = document.querySelector('#output');
  let checkedBox = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  );
  //create array from all input checkboxes
  //check which was checked
  //create array with column name and index
  let selected = checkedBox
  .map((x, i) => [x, i])
  .filter((chk) => chk[0].checked)
  .map((x, i) => [x[0].name, x[1]]);
  //get all rows and convert to array
  let rows = Array.from(document.querySelectorAll("tbody > tr"));
  //iterate through every row and get all childred (td)
  // then map to get content of every td
  let rowsContent = rows.map((x) =>
    Array.from(x.children).map((y) => y.innerHTML)
  );
//   let tt = rows.map((x,i) =>
//   console.log(x.children[i])
    
//   );
    result = 
    rowsContent.map((x) =>
      selected.reduce((acc, value) => {
        let [rowName, rowIndex] = value;
        acc[rowName] = x[rowIndex];
        return acc;
      }, {})
  );
  htmlOutput.value = JSON.stringify(result, null,'\t');
}
