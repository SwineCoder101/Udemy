'use strict';

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(oldLastName, lastName);
//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jon');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
