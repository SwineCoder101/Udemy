'use strict';
///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeTo(chargeTo) {
    this.#charge = chargeTo;
    this.log(`CHARGE TO ${chargeTo}`);
    return this;
  }

  chargeBattery() {
    this.chargeTo(100);
    return this;
  }

  accelerate() {
    this.#charge -= 1;
    this.speed += 20;
    this.log('ACCELERATE');
    return this;
  }

  log(state) {
    console.log(
      `${state}: ${this.make} is going at ${this.speed} km/h with a charge of ${
        this.#charge
      }`
    );
  }

  brake() {
    this.speed -= 5;
    this.log('BRAKE');
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.log('Checking');
rivian.accelerate().accelerate().brake().chargeTo(50).accelerate();
