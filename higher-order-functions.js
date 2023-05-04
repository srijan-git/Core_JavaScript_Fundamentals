//Higher Order Function : A function which takes another function as argument or returns a function from it called higher-order-function
/*
Normal code:-

const radius = [3, 1, 2, 4];
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.legth; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
    return output;
  }
};
console.log(calculateArea(radius));

const calculateCircumferenc = function (radius) {
  const output = [];
  for (let i = 0; i < radius.legth; i++) {
    output.push(2 * Math.PI * radius[i]);
    return output;
  }
};
console.log(calculateCircumferenc(radius));

const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.legth; i++) {
    output.push(2 * radius[i]);
    return output;
  }
};
console.log(calculateDiameter(radius));
*/

//Resuable Code
const radius = [3, 1, 2, 4];
const area = function (radius) {
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log(radius.map(area));

//Polifill of map
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.calculate(area));
