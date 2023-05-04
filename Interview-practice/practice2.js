//Array functions
//map,filter,reduce

/*
what is map()
->map function is used to crearing a new array from an existing one by applying some operation to each elements of the first array
*/
const array = [1, 2, 3, 4, 5, 6];
const multiplyThree = array.map((elements, index, array) => {
  return elements * 3 + index; //1*3+0
});

console.log(multiplyThree);

/*
What is filter()
->filter() is used to create a new array from the existing array by applying some conditions to the elements of the first array
*/
const moreThanTwo = array.filter((elements, index, array) => {
  return elements > 2;
});

console.log(moreThanTwo);

/*
what is reduce()
->reduce() reduces the array of values down to just one value.
*/
const sum = array.reduce((accumulator, currentElement, index, array) => {
  return accumulator + currentElement;
}, 0);
//Here 0 is the initial value for accumulator.
//If there is no initial value,then it sets 0 or initial index of a array as the default value for accumulator
console.log(sum);

//Polyfil for map()
Array.prototype.myMap = function (callBack) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callBack(this[i], i, this));
  }
  return temp;
};

const multiplyTwo = array.myMap((elements, index, array) => {
  return elements * 3 + index;
});

console.log(multiplyTwo);

//Polyfil for filter()
Array.prototype.myFilter = function (callBack) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const moreThanThree = array.myFilter((elements, index, array) => {
  return elements > 3;
});
console.log(moreThanThree);

//Polifil for reduce
Array.prototype.myReduce = function (callBack, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callBack(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};
const addElements = array.myReduce(
  (accumulator, currentElement, index, array) => {
    return accumulator + currentElement;
  },
  0
);

console.log(addElements);

//Question : map vs forEach
const arr = [2, 5, 3, 4, 7];
const mapResult = arr.map((elements) => {
  return arr + 2;
});

const myforEach = arr.forEach((elements, index) => {
  arr[index] = arr + 2;
});

console.log(mapResult, myforEach, arr);
