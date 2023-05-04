// call,bind and apply is javascript(Explicit bindings)
//What is call,apply and bind?

const obj = { name: "Srijan" };
function sayHello(age) {
  return "Hello " + this.name + " age is " + age;
}

function sayHello1(age, profession) {
  return "Hello " + this.name + " age is " + age + " is an " + profession;
}

console.log(sayHello.call(obj, 24));
const bindFunc = sayHello1.bind(obj);
console.log(sayHello1.call(obj, 24, "programmer"));
console.log(sayHello1.apply(obj, [24, "Teacher"]));
console.log(bindFunc(24, "Engineer"));

// Question - 1 : What is the output?
const person = { name: "Srijan" };
function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 24));
console.log(sayHi.bind(person, 24));

// Question - 2 : call with function inside object?
const age = 10;
var person1 = {
  name: "Srijan Khan",
  age: 20,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 24 };
console.log("Using call(): " + person1.getAge.call(person2));
console.log("Using bind(): " + person1.getAge.bind(person2)());

//Question - 3 : What is the output?
// var status = "😎";
// setTimeout(() => {
//   const status = "😍";
//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };
//   console.log(data.getStatus());
//   console.log(data.getStatus.call(this));
// }, 0);

//Question - 3 : call printAnimals such that it prints all animal in object

const animals = [
  { spicies: "Lion", name: "King" },
  { spicies: "Whale", name: "Queen" },
];

function printAnimals(i) {
  this.print = function () {
    console.log("#" + i + " " + this.spicies + " " + this.name);
  };
  this.print();
}
for (let i = 0; i < animals.length; i++) {
  printAnimals.call(animals[i], i);
}

//Question - 3 : Append an array to a new array
const arry = ["a", "b"];
const element = [0, 1, 2];
arry.push.apply(arry, element);
console.log(arry);

//Question - 4 : Using apply to enhance built-in functions
//find min/max number in an array
const number = [5, 6, 2, 3, 7];
console.log(Math.max.apply(null, number));
console.log(Math.min.apply(null, number));

//Question - 5 : Bound function
function f() {
  console.log(this);
}
let user = {
  g: f.bind(null),
};

user.g();

//Question - 5 : bind chaining
function f() {
  console.log(this.name);
}

f = f.bind({ name: "Srijan" }).bind({ name: "Kankana" });
f();

//Question - 6 :Polyfil for call
const car1 = {
  color: "Red",
  company: "Ferrari",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchase ${this.color} - ${this.company} car for ${currency}${price}  `
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " it's not a Callable");
  }
  context.fn = this;
  console.log(this);
  context.fn(...args);
};
purchaseCar.myCall(car1, "₹", 12000000);

//Question - 7 :Polyfil for call
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + " it's not a Callable");
  }

  if (!Array.isArray(args)) {
    throw new Error("CreateListFromArrayLike called on non-object");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myApply(car1, ["₹", 12000000]);
