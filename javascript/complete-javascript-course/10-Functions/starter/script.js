'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  anotherAtt: '',
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    this.anotherAtt = `${this.iataCode}${flightNum}`;
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

console.log(lufthansa.bookings);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// lufthansa.book(23, 'Sarah Williams');

book.call(euroWings, 23, 'Sarah Williams');
console.log(lufthansa);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'swiss airlines',
  iataCode: 'LX',
  bookings: [],
};

lufthansa.book(swiss, 583, 'Mary Cooper');
console.log(swiss);

const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);
console.log(
  '==========================BINDING HERE RIGHT NOW================='
);

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Jonas schmetmann');
bookEW23('Martha Cooper');

// with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

console.log('==================PARTIAL===================');
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const price = {};
const addVAT = addTax.bind(price, 0.23);
console.log(addVAT(100));

//exersixe

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//Greet
const greet = function (msg, name) {
  const fullMsg = `${msg} ${name}`;
  return function (fullMsg) {
    console.log(fullMsg);
  };
};

const customGreet = greet.bind(null, 'whats up', 'John');

customGreet();
