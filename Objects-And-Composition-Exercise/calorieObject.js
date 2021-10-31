function solve(input) {
    let obj = {};
    for (let index = 0; index < input.length; index+=2) {
        obj[input[index]] = Number(input[index + 1]);
        
    }
     
    console.log(obj);
    
   
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);