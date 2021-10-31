class Parking {
  constructor(capacity, vehicles = []) {
    this.capacity = Number(capacity);
    this.vehicles = vehicles;
  }
  addCar(carModel, carNumber) {
    if (this.vehicles.length >= this.capacity) {
      throw new Error("Not enough parking space.");
    }
    this.vehicles.push({
      carModel: carModel,
      carNumber: carNumber,
      payed: false,
    });
    return `The ${carModel}, with a registration number ${carNumber}, parked.`;
  }
  removeCar(carNumber) {
    for (let c of this.vehicles) {
      if (c.carNumber == carNumber) {
        if (c.payed) {
          this.vehicles.filter((car) => car.carNumber != carNumber);
          return `${carNumber} left the parking lot.`;
        }
        throw new Error(
          `${carNumber} needs to pay before leaving the parking lot.`
        );
      }
    }
    throw new Error(`The car, you're looking for, is not found.`);
  }
  pay(carNumber) {
    for (const c of this.vehicles) {
      if (c.carNumber == carNumber) {
        if (c.payed) {
          throw new Error(
            `${carNumber}'s driver has already payed his ticket.`
          );
        }
        c.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
      }
    }
    throw new Error(`${carNumber} is not in the parking lot.`);
  }
  getStatistics(carNumber) {
      let output = '';
    if (arguments.length == 0) {
        output = `The Parking Lot has ${ this.capacity - this.vehicles.length } empty spots left.`;
        let sorted = this.vehicles.sort((a,b) => a.carModel.localeCompare(b.carModel));
        sorted.forEach(car => {
            output += `\n${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed': 'Not payed' }`;
        })
        return output;
    }
    else {
        let result = this.vehicles.filter((car) => car.carNumber == carNumber)[0];
        output += `${result.carModel} == ${result.carNumber} - ${result.payed ? 'Has payed': 'Not payed'}`;
        return output;
    }
  }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics("TX3691CA"));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
