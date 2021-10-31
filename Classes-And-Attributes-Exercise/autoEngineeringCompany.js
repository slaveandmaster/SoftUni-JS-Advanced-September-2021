function solve(input) {
    let cars = new Map();
    for (const line of input) {
        let [ carBrand, carModel, carProduce ] = line.split(' | ');
        if (!cars.has(carBrand)) {
            cars.set(carBrand, new Map());
        }
        let model = cars.get(carBrand);
        if (!model.has(carModel)) {
            model.set(carModel,0);
        }
        model.set(carModel, model.get(carModel) + Number(carProduce));
    }
    for (let [key, value] of cars.entries()) {
        console.log(key);
        for (const [name , price] of value.entries()) {
            console.log(`###${name} -> ${price}`);
        }
    }
}
//second variant
// function solve(input) {
//     let cars = new Map();
//     for (const line of input) {
//         let [ carBrand, carModel, carProduce ] = line.split(' | ');
//         if (cars.has(carBrand)) {
//             let refModel = cars.get(carBrand);
//             if (refModel.has(carModel)) {
//                 refModel.set(carModel, refModel.get(carModel) + Number(carProduce));
//             }
//             else {
//                 cars.get(carBrand).set(carModel,Number(carProduce));
//             }
//         }
//         else {
//             cars.set(carBrand, new Map());
//             cars.get(carBrand).set(carModel,Number(carProduce));
//         }
        
//     }
//     for (let [key, value] of cars.entries()) {
//         console.log(key);
//         for (const [name , price] of value.entries()) {
//             console.log(`###${name} -> ${price}`);
//         }
//     }
// }
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);