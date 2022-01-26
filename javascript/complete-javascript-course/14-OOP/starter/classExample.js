'use strict';

class Account {
  //1)public fields (instances)
  local = navigator.language;

  //2)private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected
    this._movements = [];
    this.#pin = pin;
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }
  //public interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
  //private method
  #approveLoan(val) {
    return true;
  }
  static helper() {
    console.log(`here is a helper`);
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
acc1.getMovements().push(250);
acc1.getMovements().push(-140);
acc1.deposit(250);
acc1.withdraw(140);

acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.pin);
Account.helper();

acc1.deposit(250).deposit(350);
console.log(acc1.getMovements());
