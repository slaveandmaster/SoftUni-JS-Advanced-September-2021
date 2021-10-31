class Movie {
  constructor(movieName, ticketPrice) {
    this.movieName = movieName;
    this.ticketPrice = Number(ticketPrice);
    this.screenings = [];
    this.totalProfit = 0;
    this.totalTickets = 0;
  }
  newScreening(date, hall, description) {
    let movieObj = { date, hall, description };
    //     •	Check if there is already entered screening with the same date and hall and throw an Error:
    // `Sorry, {hall} hall is not available on {date}`
    let isListed = this.screenings.find(
      (m) => m.date === date && m.hall == hall
    );
    if (isListed == undefined) {
      this.screenings.push(movieObj);
      return `New screening of ${this.movieName} is added.`;
    } else {
      throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
    }
  }
  endScreening(date, hall, soldTickets) {
    //         •	Check if the screening array has a screening with the given date and hall, if NOT throw an Error:
    // `Sorry, there is no such screening for {movieName} movie.`
    let isListed = this.screenings.find(
      (m) => m.date == date && m.hall == hall
    );
    if (isListed == undefined) {
      throw new Error(
        `Sorry, there is no such screening for ${this.movieName} movie.`
      );
    } else {
      let profit = Number(soldTickets) * Number(this.ticketPrice);
      this.totalProfit += profit;
      this.totalTickets += Number(soldTickets);
      // console.log(this.screenings);
      let idx = 0;
      for (let i = 0; i < this.screenings.length; i++) {
        if (
          this.screenings[i].date == date &&
          this.screenings[i].hall == hall
        ) {
          idx = i;
          break;
        }
      }
      this.screenings.splice(idx, 1);
      return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${profit}`;
    }
  }
  toString() {
    let output = `${
      this.movieName
    } full information:\nTotal profit: ${this.totalProfit.toFixed(
      0
    )}$\nSold Tickets: ${this.totalTickets}`;
    if (this.screenings.length > 0) {
      output += `\nRemaining film screenings:`;
      this.screenings
        .sort((a, b) => a.hall.localeCompare(b.hall))
        .forEach((movie) => {
          output += `\n${movie.hall} - ${movie.date} - ${movie.description}`;
        });
    } else {
      output += `\nNo more screenings!`;
    }
    return output;
  }
}

let m = new Movie("Wonder Woman 1984", "10.00");
console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
console.log(m.endScreening("October 3, 2020", "Main", 78));
console.log(m.toString());

m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
console.log(m.toString());
