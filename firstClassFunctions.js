a(); //can be hoisted

//Function Statement or Function Declaration
function a() {
  console.log("A called");
}

//Function Expression
var b = function () {
  console.log("B called");
};
b(); //cannot be hoisted

/*Difference between Function Statement and Function Expression
ans-> The difference is hoinsing function statement can be hoisted.
Like we call a function even before it is created or initialiazed

*/

/*Anonymous Function
It does not have its own identity
This kind of functions are used when we used functions as values
*/

//Named Function Expression
let func = function xd() {
  console.log("Named function..");
};

//xd() //Error
func();

//Difference between Parameter & Arguments
function func2(param1, param2) {
  console.log(param2 + param1);
}
func2(1, 2); //1 and 2 are called argument

//First class Functions or First class citizens
/*The ability to return a function as a value from another function is called First class functions
 */
var car = function () {
  return function xys() {
    console.log("XYS is created inside car function");
  };
};
console.log(car());

//Arrow Functions
const arrow = () => {
  console.log("Hey Arrow function");
};
arrow();




