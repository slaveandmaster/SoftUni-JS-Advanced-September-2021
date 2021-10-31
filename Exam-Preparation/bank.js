class Bank {
  constructor(bankname) {
    this._bankName = bankname;
    this.allCustomers = [];
  }
  newCustomer(customer) {
    this.allCustomers.find((c) => {
      if (c.personalId == customer.personalId) {
        throw new Error(
          `${customer.firstName} ${customer.lastName} is already our customer!`
        );
      }
    });
    this.allCustomers.push(customer);
    return customer;
  }
  depositMoney(personalId, amount) {
    let person = this.allCustomers.find(
      (client) => client.personalId == personalId
    );
    if (person == undefined) {
        throw new Error(`We have no customer with this ID!`);
    }
    if (!person.totalMoney) {
        person.totalMoney = Number(amount);
    }
    else {
        person.totalMoney += Number(amount);
    }
    if (!person.transactionInfo) {
        person.transactionInfo = [];
    }
    let transactionId = person.transactionInfo.length + 1;
    let msg = `${transactionId}. ${person.firstName} ${person.lastName} made deposit of ${amount}$!`;
    person.transactionInfo.push(msg);
    return `${person.totalMoney}$`;
  }
  withdrawMoney(personalId, amount) {
      let person = this.allCustomers.find(client => client.personalId == personalId);
      if (person == undefined) {
          throw new Error(`We have no customer with this ID!`);
      }
      else {
          if (person.totalMoney < amount) {
              throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
          }
          else {
              person.totalMoney -= Number(amount);
              let transactionId = person.transactionInfo.length + 1;
              let msg = `${transactionId}. ${person.firstName} ${person.lastName} withdrew ${amount}$!`;
              person.transactionInfo.push(msg);
              return `${person.totalMoney}$`;
          }
      }

  }
  customerInfo(personalId) {
      let person = this.allCustomers.find(c => c.personalId == personalId);
      if (person == undefined) {
          throw new Error(`We have no customer with this ID!`);
      }
      else {
          let output = `Bank name: ${this._bankName}`;
          output += `\nCustomer name: ${person.firstName} ${person.lastName}`;
          output += `\nCustomer ID: ${person.personalId}`;
          output += `\nTotal Money: ${person.totalMoney}$`;
          output += `\nTransactions:`;
        //   person.transactionInfo.sort((a,b)=> b.transactionId - a.transactionId).forEach(t =>{
        //       output += `\n${t}`;
        //   })
          for (let i = person.transactionInfo.length - 1; i >= 0; i--) {
              output += `\n${person.transactionInfo[i]}`;
              
          }
          return output;
      }
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));
