function solve(input) {
  //   let getValue = (value) => {
  //     return value
  //       .split("|")
  //       .filter((x) => x != "")
  //       .map((line) => line.trim())
  //   };

  //   let header = getValue(input[0]);
  //   console.log(header);
  let arr = [];
  let heading = input
    .shift()
    .split("|")
    .filter((x) => x != "")
    .map((el) => el.trim());
   //arr.push({ [heading[0]] : '', [heading[1]] : '',[ heading[2]]: ''});
    for (const item of input) {
      let [town, latitude, longtitude] = item
        .split("|")
        .filter((x) => x != "")
        .map((el) => el.trim());
        latitude = Number(latitude);
        longtitude = Number(longtitude);
      arr.push({
        Town: town,
        Latitude: Number(latitude.toFixed(2)),
        Longitude: Number(longtitude.toFixed(2)),
      });
    }
    console.log(JSON.stringify(arr));

  //   let head =
  //   input.shift()
  //   .split("|")
  //   .filter((x) => x != "")
  //   .map((el) => el.trim());

  // let getData = (str) => {
  //   return str
  //     .split("|")
  //     .filter((x) => x != "")
  //     .map((el) => el.trim());
  // };
  // let obj = input.map((row) => {
  //   let line = getData(row);
  //   return heading.reduce((acc, item, itemIndex) => {
  //     acc[item] = line[itemIndex];
  //     return acc;
  //   }, {});
  // });

  //console.log(JSON.stringify(obj));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
