'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

//Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// console.log(Person.prototype);

// matilda.calcAge();
// jonas.calcAge();

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 5, 6, 7, 7];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.log(x => x + 1);

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullname(name) {
    if (name.includes(' ')) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }
  get fullname() {
    this._fullname;
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(this.firstName);
};

jessica.greet();

console.log(jessica.age);

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this._movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 32;
// console.log(account.movements);

// const walter = new PersonCl('Walter White', 1965);
// console.log(walter._fullname);

// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     //protected
//     this._pin = pin;
//     this._movements = [];
//     this.locale = navigator.language;
//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   getMovements() {
//     return this._movements;
//   }

//   deposit(val) {
//     this._movements.push(val);
//   }

//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan Approved`);
//     }
//   }
//   static hey() {
//     console.log('Here is a static hey');
//     console.log(this);
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

// console.log(acc1);
// console.log(acc1.pin);
// console.log(acc1.getMovements());

// Person.hey = function () {
//   console.log(`hey?`);
// };

// Person.hey();

// Account.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
