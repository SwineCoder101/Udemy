'use strict';
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
const THIS_YEAR = 2021;
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(THIS_YEAR - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return THIS_YEAR - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        THIS_YEAR - this.birthYear
      } years old but as a student I feel more like ${
        THIS_YEAR - this.birthYear + 10
      }`
    );
  }
}

class GirlFriendCl extends StudentCl {
  constructor(fullname, birthYear, course, boyfriend) {
    super(fullname, birthYear, course);
    this.boyfriend = boyfriend;
  }
  introduce() {
    super.introduce();
    console.log(
      `I am also ${this.boyfriend.fullName}'s sexy girlfriend/Wife, I feel so lucky to have him in my life`
    );
  }
}

const liam = new PersonCl('Liam Faruq', 1992);
const martha = new GirlFriendCl('Tara Faruq', 1994, 'Biology', liam);
console.log(martha);

martha.introduce();
martha.calcAge();

// const martha = new StudentCl('Martha Jones', 2012);
///////////////////////////////////////////////////////////////////////////////////////////////

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
