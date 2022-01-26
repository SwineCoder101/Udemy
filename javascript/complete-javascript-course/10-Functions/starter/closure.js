'use strict';

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();

// console.dir(booker);

let f;

const g = function name() {
  const a = 23;
  f = function name() {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//re-assigning f function
h();
f();

console.dir(f);

//Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n}`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`will Start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
