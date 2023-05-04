// "this" keyword is used to refer some object
//implicit binding
console.log(this); //Here 'this' keyword refers to the global object or window object
this.a = 6;

// Example 1
//Normal FUunction
function getToKnowThis() {
  console.log(this.a); //it will target the parent object
}
getToKnowThis();

//Arrow function
const letsSee = () => {
  console.log(this.a);
};
letsSee();

// Example 1
let user = {
  name: "Srijan",
  age: 22,
  getname() {
    console.log(this);
    console.log(this.name);
  },
};
user.getname();

// Example 2
let user1 = {
  name: "Srijan",
  age: 22,
  childObj: {
    newName: "Kankana",
    getname() {
      console.log(this);
      console.log(this.newName + " and " + this.name); //Here this.newname points to the parent object not window object
    },
  },
};

user1.childObj.getname();

// Example 3
let user2 = {
  name: "Srijan",
  age: 22,
  getDetails: () => {
    console.log(this);
    console.log(this.name);
  },
};
user2.getDetails();

// Example 3
let user3 = {
  name: "Srijan",
  age: 22,
  getDetails() {
    const nestedArrowFunc = () => console.log(this.name);
    nestedArrowFunc();
  },
};

user3.getDetails();

//Example 4 : How "this" will perform inside a constructor
class UserClass {
  constructor(n) {
    this.name = n;
  }
  getDetails() {
    console.log(this.name);
  }
}

const userCost = new UserClass("Srijan");
console.log(userCost);
userCost.getDetails();

//Question - 1 : What is the output?
const userQ = {
  firstName: "Srijan1",
  getName() {
    const firstName = "Srijan2";
    return this.firstName;
  },
};
console.log(userQ.getName());

//Question - 2 : What is the result of accessing its ref?why?
function makeUser() {
  return {
    name: "Srijan",
    ref: this, //here 'this' will be pointing to window object
  };
}
let userQ1 = makeUser();
console.log(userQ1.ref.name); //window object don't have any object called name so this will print nothing

//To solve the above problem we can do like follwing
function makeUser2() {
  return {
    name: "Srijan",
    ref() {
      return this;
    },
  };
}
let userQ2 = makeUser2();
console.log(userQ2.ref().name);

//Question - 2 : What is the output?
// const user5 = {
//   name: "Srijan Kumar Khan",
//   logMessage() {
//     console.log(this.name); //What will it log
//   },
// };
//setTimeout(user5.logMessage, 1000); //This will print nothing becasue setTimeout using user.logMessage as a callback rather than a method the complete logMessage() method will be copied to the setTimeout and user5.logmessage will no longer have the access to the object user5 so as beacuse user5.logMessage will work independently so inside logMessage og this.name will be pointing to the global obeject so.and global object does not have any object called name so it will print nothing.

// so we can solve this issue like
// setTimeout(function () {
//   user5.logMessage();
// }, 1000);

//Question - 3 : Create an object calculator?
let calculator = {
  read() {
    this.a = +prompt("Enter the value of a : ", 0);
    this.b = +prompt("Enter the value of b : ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Question - 4 : What will be the output?
var length = 4;
function callbcak() {
  console.log(this.length);
}
const object = {
  length: 5,
  mthod(fn) {
    fn();
  },
};
object.mthod(callbcak);

//Question - 5 : What will be the output?
const object1 = {
  length: 5,
  mthod() {
    console.log(arguments);
    console.log(arguments[0]); //3
    arguments[0]();
  },
};
object1.mthod(callbcak, 2, 3); //This will print 3

//Question - 6 : Implement calc
// const result = calc.add(10).multiply(5).substract(30).add(10);
// console.log(result.total);

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    console.log(this);
    return this;
  },
  multiply(a) {
    this.total *= a;
    console.log(this);
    return this;
  },
  substract(a) {
    this.total -= a;
    console.log(this);
    return this;
  },
};
const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
