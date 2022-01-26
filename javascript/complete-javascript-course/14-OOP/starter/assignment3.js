'use strict';
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.decelerate = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.charge -= 1;
  this.speed += 20;
};

const electricVehicle = new EV('Tesla', 20, 80);

console.log(electricVehicle);
electricVehicle.chargeBattery(100);
console.log(electricVehicle);
electricVehicle.accelerate();
console.log(electricVehicle);

const toyota = new Car('toyota', 20);
console.log(toyota);
toyota.accelerate();
console.log(toyota);
