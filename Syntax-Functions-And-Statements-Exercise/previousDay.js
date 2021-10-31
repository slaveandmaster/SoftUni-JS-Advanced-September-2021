function solve(year, month, day) {
    let date = year +'-'+ month + '-' + day;
    let prevDay = new Date(date);
    prevDay.setDate(day - 1);
    console.log(`${prevDay.getFullYear()}-${prevDay.getMonth()+ 1}-${prevDay.getDate()}`);
}
solve(2016, 9, 30);
solve(2016, 10, 1);