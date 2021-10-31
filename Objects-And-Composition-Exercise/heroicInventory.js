function solve(input) {
    let result = input.map((line) => line.split(' / '));
    let obj = {};
    let arr = [];
    for (let index = 0; index < result.length; index++) {
         obj = {
            'name': result[index][0],
            'level': Number(result[index][1]),
            'items': result[index][2] ? result[index][2].split(',').map( e => e.trim()) : []

        }
        arr.push(obj);
    }
     console.log(JSON.stringify(arr));
    // let alternative = input.map((line) => line.split(' / ')).reduce((heroes, items) => {
    //     heroes.push({'name': items[0], 'level': Number(items[1]),'items': items[2] ? items[2].split(',') : []})
    //     return heroes;
    // } ,[])
    // console.log(JSON.stringify(alternative));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);