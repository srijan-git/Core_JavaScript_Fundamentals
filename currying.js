// Using bind method
let multiply = function (x, y) {
  console.log("Currying under the hood, Multiplication: " + x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

// Using closure
function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * height * breadth;
    };
  };
}
console.log("Volume of a container is: " + calculateVolume(4)(5)(6));
