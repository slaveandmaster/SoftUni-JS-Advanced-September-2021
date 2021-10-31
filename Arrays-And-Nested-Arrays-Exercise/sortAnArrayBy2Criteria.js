function solve(input) {
    const result = input.sort((a,b) => {
       return a.length - b.length || a.localeCompare(b);
    })
    console.log(result.join("\n"));
}
solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["test", "Deny", "omen", "Default"]);
