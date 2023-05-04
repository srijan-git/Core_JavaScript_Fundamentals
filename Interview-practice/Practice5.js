/*
What is Closure in JavaScript?
->A closure gives you the access to an outer function scope from an inner function scope.
*/
/*
What is Lexical Scope?
->In javascript lexical scope means a variable defined in outside a function can be accisible in another function after a varible declaration.
But the opposite is not true.

*/

//Example - 1
var username = "Srijan Kumar Khan"; //global Scope
function local() {
  //local Scope
  console.log(username);
  var username2 = "Kankana Das";
}
// console.log(username2);
local();

//Example - 2
//Global Scope
function subscribe() {
  var name = "Srijan Kumar Khan";
  //Inner scope 2
  function displayName() {
    //Inner Scope
    console.log(name);
  }
  displayName();
}
subscribe();

/*
What is Closure Scope Chain?
->Scope chain means that we can acess a varible from all the scope itself
*/

// Example - 1
var tryScopeChain = "Hey Javascipt";
function makeFunc() {
  var name = "Mozilla";
  function displayName(num) {
    console.log(name, num, tryScopeChain);
  }
  return displayName;
}
makeFunc()(5);

//Example - 2
//Global Scope
var e = 10;

function sum(a) {
  return function (b) {
    return function (c) {
      //Outer Function
      return function (d) {
        //Local Scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));

//Question - 1 : What will log to the console

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //Shadowing
    console.log(count); //1
  }

  console.log(count); //0
})();

//Question - 2 : Write a function that would  allow you to do this
var addSix = createBase(6);
addSix(10); //return 16
addSix(21); //return 27
function createBase(value) {
  return function (value2) {
    console.log(value + value2);
  };
}
// Question - 3 : Time Optimizing using Closure
// function find(index) {
//   let a = [];
//   for (let i = 0; i < 10000; i++) {
//     a[i] = i * i;
//   }
//   console.log("Value at the index: " + a[index]);
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");
// console.time("12");
// find(50);
// console.timeEnd("12");

//using Closure
function find() {
  let a = [];
  for (let i = 0; i < 10000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log("Value at the index: " + a[index]);
  };
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("12");
closure(12);
console.timeEnd("12");
console.time("12");
closure(50);
console.timeEnd("12");

//Question - 4 : SetTimeout Output
function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function log() {
        console.log(i); //What will be the output
      }, i * 1000);
    }
    inner(i);
  }
}
a();
//It will print 3 three times.Because var doesnot block scoped.var is function scoped

//Question - 4 : How would you use a closure to create a private counter

function counter() {
  var _counter = 0;
  function addd(increment) {
    _counter += increment;
  }
  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    addd,
    retrive,
  };
}

const c = counter();
c.addd(5);
c.addd(10);

console.log(c.retrive());

//Question - 6 : What is Module pattern?
var module = (function () {
  function privateMethod() {
    console.log("Inside Private Method");
  }
  return {
    publicMethod: function () {
      console.log("Inside Public Method");
    },
  };
})();
module.publicMethod();
// module.privateMethod(); cannot be called

//Quesiton - 7 :Make this run only once
let view;
function callOnlyOnce() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already called once");
    } else {
      view = "Function";
      console.log("Thnks for calling the: ", view);
      called++;
    }
  };
}
let isCalled = callOnlyOnce();
isCalled();
isCalled();

