function solve(input, number) {
    let result = [];
    for (let index = 0; index < input.length; index+=number) {
        result.push(input[index]);
        
    }
    return result;
}
solve(["5", "20", "31", "4", "20"], 2);
solve(["dsa", "asd", "test", "tset"], 2);
solve(["1", "2", "3", "4", "5"], 6);
