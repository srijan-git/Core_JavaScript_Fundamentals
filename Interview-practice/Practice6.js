//Infinite Currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)());

//Currying vs Partial Application

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
} //Partial Application

const x = sum(10);
console.log(x(5, 6));

//or

console.log(sum(10)(5, 6));

function sum2(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
} //Currying

console.log(sum2(4)(5)(7));

//Question - 6 : curry() implementation
//convert f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunction(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunction(...args, ...next);
      };
    }
  };
}

const sumOfNumber = (a, b, c, d) => a + b + c + d;
const totalSum = curry(sumOfNumber);
console.log(totalSum(1)(2)(3)(4));

//Manipulating Dom using Currying

function updateContent(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateTextContent = updateContent("heading")("Hello Kankana");
