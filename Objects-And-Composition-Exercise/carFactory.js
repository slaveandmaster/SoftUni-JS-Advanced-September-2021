function solve({model, power, color, carriage, wheelsize}) {
    const engines = [
        { power: 90, volume: 1800},
        { power: 120, volume: 2400},
        { power: 200, volume: 3500}
    ];
    const storageCarriage = [
        { Hatchback: { type: 'hatchback', color: ''} },
        { Coupe: { type: 'coupe', color: '' }}
    ];
    function getWheels(size) {
        let wheels = [];
        wheels.length = 4;
        if (Number(size) % 2 == 1) {
            wheels.fill(size);
        }
        else {
            wheels.fill(size - 1);
        }
        return wheels;
    }
    return {
        model,
        engine: engines.find((e) => e.power >= power),
        carriage: { type: carriage, color},
        wheels: getWheels(wheelsize)
    }
}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
));