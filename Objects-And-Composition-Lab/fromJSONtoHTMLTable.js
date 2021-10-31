function solve(input) {
  let data = JSON.parse(input);
  let outputArr = ["<table>"];
  outputArr.push(makeRow(data));
  data.forEach((obj) => outputArr.push(makeValueRow(obj)));
  outputArr.push("</table>");

  console.log(outputArr.join("\n"));
 
  function escapeHtml(value) {
    value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
    return value;
  }
  function makeRow(arr) {
    let result = "<tr>";
    Object.keys(arr[0]).forEach((key) => {
      result += "<th>" + escapeHtml(key).trim() + "</th>";
    });
    result += "</tr>";
    return result;
  }
  function makeValueRow(obj) {
    let result = "<tr>";
    Object.values(obj).forEach((element) => {
      result += "<td>" + escapeHtml(element) + "</td>";
    });
    result += "</tr>";
    return result;
  }

  let result =
    "<table>" +
    data.reduce((html, row) => {
      html += "<tr><td>" + row.Name + "</td>" + row.Score + "<td></td></tr>";
      return html;
    }, "") +
    "</table>";
  //console.log(result);
}
solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
solve(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);
