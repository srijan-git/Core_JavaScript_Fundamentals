/*
What is Object?
->An object is a collection of properties, and properties is an association between key and a value.
*/

//Example - 1
const user = {
  name: "Srijan Kumar Khan",
  age: 18,
  "How to access this property": true,
};

// delete user.age;
console.log(user);
// delete user["How to access this property"];
console.log(user["How to access this property"]);

//Example - 2

const func = (function (a) {
  delete a; //Delete only works on propety of object
  return a;
})(5);
console.log(func);

//How will we add properties dynamically
const property = "firstName";
const name = "Kankana Das";

const user2 = {
  property: name,
  [property]: name, //Right way to add a property to an object
};
console.log(user2);

//How to Loop through each key of an object

for (key in user) {
  console.log(key); //This will print the keys
  console.log(user[key]); //This will print the value
}

//Question - 1 :What is the output?

const obj = {
  a: "one", //This will be replaced
  b: "two",
  a: "three",
};

console.log(obj);

//Question - 2 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of num by 2
let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};
function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
multiplyByTwo(nums);
console.log(nums);

//Question - 3 : What's the output of the following code?
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

//Question - 4 : What is JSON.stringify and JSON.parse?
const user3 = {
  name: "Srijan Kumar Khan",
  age: 18,
};
const stringFormat = JSON.stringify(user3); //This will convert an object into string
console.log(stringFormat);
console.log(JSON.parse(stringFormat)); //This will convert an String into object

localStorage.setItem("Test", stringFormat); //This will store object inside browser localstorage as strinig format

localStorage.setItem("Test2", user3); //This will store like [object,object](and it is not desirable one)

console.log(JSON.parse(localStorage.getItem("Test")));

//Question - 5 : What is the output?
console.log([..."Lydia"]); //spread operator

//Question - 6 : What is the output?
const userObj = { name: "Srijan", age: 22 };
const admin = { admin: true, ...userObj };
console.log(admin);

//Question - 7 : What is the output?
const settings = {
  username: "Srijan",
  level: 19,
  health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

//Question - 8 : What is the output?
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius, //Here this refers to the window object or we an say global object
};

console.log(shape.diameter()); //This will generate output as 20
console.log(shape.perimeter()); //This will generate output as NaN

//What is destructuring in objects ?
let user4 = {
  userName: "Srijan",
  age: 24,
  fullName: {
    middle: "Srijan",
    last: "Khan",
  },
};

const userName = "Srijan Kumar Khan";
const { userName: myName } = user4; //Renaming
const {
  fullName: { middle },
} = user4; //Nested Destructuring
console.log(middle);

//Question - 10 :What's the output?
function getItem(fruitList, favoriteFruit, ...args) {
  //A rest parameter must be last in a parameter list.
  return [...fruitList, ...args, favoriteFruit];
}

console.log(getItem(["banana", "apple"], "pear", "orange"));

//Question - 11 :What's the output?

let cc = { greeting: "Hey!" };
let d;
d = cc; //in case of object it just assigning a reference to another it does not copy the actual value and create seperate one d cc are pointing the same object
cc.greeting = "Hello";
console.log(d.greeting); //output will be hello

//Question - 12 :What's the output?
console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

//Question - 13 :What's the output?
let person = { name: "Lydia" };
const members = [person];
person = null;
console.log(members);
console.log(person);

//Question - 14 :What's the output?
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  //   console.log(x);
  console.log((x.number *= 2));
};
multiply();
multiply();
multiply(value);
console.log(value); //Value has been modified to 20
multiply(value); //Value has been again modified to 40

//Question - 15 :What's the output?
function changeNameAndAge(person) {
  person.age = 25;
  person = {
    name: "Jhon",
    age: 50,
  };
  return person;
}

const personObj1 = {
  name: "Alex",
  age: 30,
};

const personObj2 = changeNameAndAge(personObj1);
console.log(personObj1);
console.log(personObj2);

/*
Question - 16 : What is shallow copy and Deep copy?
->When we create a copy of another object but that created object still holds the reference of the original object is called Shallow copy.

But when we completely clone an object and that object has no reference of the original object is called Deep copy.
*/

// Question - 16 : How to deep copy/clone an object?
let userObj1 = {
  userName: "Srijan",
  age: 22,
};

//approach - 1
// const objClone = Object.assign({}, userObj1);

// Approach - 2
// const objClone = JSON.parse(JSON.stringify(userObj1));

// Approach - 3
const objClone = { ...userObj1 };

objClone.userName = "Kankana";

console.log(objClone);
console.log(userObj1);
