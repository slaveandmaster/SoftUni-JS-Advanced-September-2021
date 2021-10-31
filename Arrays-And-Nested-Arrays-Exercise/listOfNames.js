function solve(input) {
   let sorted = input.sort((a,b) => a.localeCompare(b));
   sorted.forEach((item, index) => {
       console.log(`${index + 1}.${item}`);
   });
}
solve(["John", "Bob", "Christina", "Ema"]);
