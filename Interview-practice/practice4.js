//Functions in Javascript
//What is Function Declaration?
//What is Function Expression?

//What is First class functions?
function sqare(value) {
  return value * value;
}

function display(fn) {
  console.log("Squre is: " + fn(5));
}

display(sqare);

//What is IIFE(Immediately invoked Function Expression)
(function square2(val) {
  console.log("IIFE: " + val * val);
})(5);

//Output Based Question : IIFE
(function (x) {
  return (function (y) {
    console.log("Output: " + x); //Will give us the output 1
  })(2);
})(1);

//Output Based Question : Function Scope
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
} //This is happening because let is blocked scope.But this will not give the same output as var because var is not blocked scope

//Output Based Question : Function Hoisting
functionName(); //Functions can be hoisted in a bit different way than a normal varible is .
function functionName() {
  console.log("Srijan Kumar");
}

//Output Based Question : Function Hoisting type 2
var x = 21;
const fun = function () {
  console.log(x); //Output will be undefined beacasue js creates a separate execution context for function/local scope
  var x = 20;
};

fun();

//Spread vs Rest operators
//Using rest operator
function multiply(...num) {
  console.log("Multiplicaiton of Two numbers: " + num[0] * num[1]);
}
var arr = [5, 6];
multiply(...arr); //using spread operator

//Output Based Question : params vs arguments
const fn = (a, x, y, ...numbers) => {
  console.log(x, y, numbers);
};
fn(5, 6, 3, 7, 8, 9, 10);

//What is Arrow Function?
const add = (first, second) => first + second;
console.log("Arrow function: Summation of two numbers: " + add(2, 3));

//Arrow function vs Regular Function

// 1 - first difference is syntax
// 2 - Implicit "return" keyword
function mul(num) {
  return num * num;
}
const squareArrow = (num) => num * num;

//3-Arguments
// fn2(1, 2, 3);
// fn3(1, 2, 3);

function fn2() {
  console.log(arguments);
}
const fn3 = () => console.log(arguments); //This will throw error

//4 - "this" keyword
let user = {
  username: "Srijan Kumar Khan",
  skk1: () => {
    console.log("Keep learning " + this.username);
  },
  skk2() {
    console.log("Keep it up " + this.username + " you can do it");
  },
};

user.skk1();
user.skk2();
