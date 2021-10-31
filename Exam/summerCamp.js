class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = { child: 150, student: 300, collegian: 500 };
    this.listOfParticipants = [];
  }
  registerParticipant(name, condition, money) {
    if (this.priceForTheCamp[condition] == undefined) {
      throw new Error("Unsuccessful registration at the camp.");
    }
    for (const item of this.listOfParticipants) {
      if (item.name === name) {
        return `The ${name} is already registered at the camp.`;
      }
    }
    let neededMoney = this.priceForTheCamp[condition];
    if (money < neededMoney) {
      return `The money is not enough to pay the stay at the camp.`;
    }
    this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
    return `The ${name} was successfully registered.`;
  }
  unregisterParticipant(name) {
    let isListed = this.listOfParticipants.find((u) => u.name === name);
    if (isListed == undefined) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }
    this.listOfParticipants = this.listOfParticipants.filter(
      (u) => u.name != name
    );
    return `The ${name} removed successfully.`;
  }

  //     timeToPlay(typeOfGame, participant1, participant2) {
  //       if (typeOfGame == 'WaterBalloonFights') {
  //           let player1Index;
  //           let player1;
  //           let player1Condition;
  //           let player1Power;
  //           let player2Index;
  //           let player2;
  //           let player2Condition;
  //           let player2Power;
  //           for (let i = 0; i < this.listOfParticipants.length; i++) {
  //               if (this.listOfParticipants[i].name == participant1) {
  //                   player1Index = i;
  //                   player1 = participant1;
  //                   player1Condition = this.listOfParticipants[i].condition;
  //                   player1Power = this.listOfParticipants[i].power;
  //               } else if (this.listOfParticipants[i].name == participant2) {
  //                   player2Index = i;
  //                   player2 = participant2;
  //                   player2Condition = this.listOfParticipants[i].condition;
  //                   player2Power = this.listOfParticipants[i].power;
  //               }
  //           }

  //           if (player1 == undefined || player2 == undefined) {
  //               throw new Error('Invalid entered name/s.')
  //           }

  //           if (player1Condition != player2Condition) {
  //               throw new Error('Choose players with equal condition.')
  //           }

  //           if (player1Power > player2Power) {
  //               this.listOfParticipants[player1Index].wins += 1;
  //               return `The ${player1} is winner in the game ${typeOfGame}.`
  //           } else if (player1Power < player2Power) {
  //               this.listOfParticipants[player2Index].wins += 1;
  //               return `The ${player2} is winner in the game ${typeOfGame}.`
  //           } else {
  //               return 'There is no winner.'
  //           }
  //       } else if (typeOfGame == 'Battleship') {
  //           let player1Index;
  //           let player1;
  //           let player1Power;

  //           for (let i = 0; i < this.listOfParticipants.length; i++) {
  //               if (this.listOfParticipants[i].name == participant1) {
  //                   player1Index = i;
  //                   player1 = participant1;
  //                   player1Power = this.listOfParticipants[i].power;
  //               }
  //           }

  //           if (player1 == undefined) {
  //               throw new Error('Invalid entered name/s.')
  //           }

  //           this.listOfParticipants[player1Index].power += 20;
  //           return `The ${player1} successfully completed the game ${typeOfGame}.`
  //       }
  //   }
  timeToPlay(typeOfGame, participant1, participant2) {
    // let firstPlayer = this.listOfParticipants.find(
    //   (p) => p.name == participant1
    // );
    // let secondPlayer = this.listOfParticipants.find(
    //   (p) => p.name == participant2
    // );
    if (typeOfGame == "WaterBalloonFights") {
      let firstPlayer = this.listOfParticipants.find(
        (p) => p.name == participant1
      );
      let secondPlayer = this.listOfParticipants.find(
        (p) => p.name == participant2
      );

      if (firstPlayer == undefined || secondPlayer == undefined) {
        throw new Error(`Invalid entered name/s.`);
      }
      if (firstPlayer.condition != secondPlayer.condition) {
        throw new Error(`Choose players with equal condition.`);
      }
      let name;
      if (firstPlayer.power > secondPlayer.power) {
        name = firstPlayer.name;
        firstPlayer.wins += 1;
        return `The ${name} is winner in the game ${typeOfGame}.`;
      } else if (firstPlayer.power < secondPlayer.power) {
        name = secondPlayer.name;
        secondPlayer.wins += 1;
        return `The ${name} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else if (typeOfGame == "Battleship") {
      let firstPlayer = this.listOfParticipants.find(
        (p) => p.name == participant1
      );
      if (firstPlayer == undefined) {
        throw new Error(`Invalid entered name/s.`);
      }
      firstPlayer.power += 20;
      return `The ${firstPlayer.name} successfully completed the game ${typeOfGame}.`;
    }
  }
  toString() {
    let output = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
    let sorted = this.listOfParticipants.sort((a, b) => {
      let winsA = a.wins;
      let winsB = b.wins;
      return winsB - winsA;
    });
    for (const item of sorted) {
      output += `\n${item.name} - ${item.condition} - ${item.power} - ${item.wins}`;
    }
    return output;
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
//console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// //console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());
