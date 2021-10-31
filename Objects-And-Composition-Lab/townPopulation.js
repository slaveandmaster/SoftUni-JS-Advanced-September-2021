function solve(input) {
    const result = input.map((value,index) => {
       return value.split(' <-> ');
    }).reduce((acc, current) => {
        if (acc[current[0]]) {
            acc[current[0]] += Number(current[1]);
        }
        else {
            acc[current[0]] = Number(current[1]);
        }
        return acc;
    },{})
    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)