// Traditional Bind Method
let name = {
  firstName: "Srijan Kumar",
  lastName: "Khan",
};

let printName = function (HomeTown, State) {
  console.log(
    this.firstName + " " + this.lastName + ", " + HomeTown + ", " + State
  );
};

// let printMyName = printName.bind(name);
// printMyName();

//Creating our own implementation for bind()
Function.prototype.mybind = function (...args) {
  let obj = this,
    parameter = args.slice(1);
  //   console.log(args);
  //   console.log(parameter);
  return function (...args2) {
    // console.log(args2);
    obj.apply(args[0], [...parameter, ...args2]);
  };
};

let printMyName2 = printName.mybind(name, "Budge Budge");
printMyName2("West Bengal");
