//var,let & const
//Hoisting
//Scoping
//Shadowing
//Declaration
//Declaration without
//Temporal deadzone
function test() {
  let a = "Hello";
  var b = "Say hi";
  let c = "Tracting";
  if (true) {
    let a = "hi"; //shadowing
    let b = "Hi Hi";
    //var c = "Tracking";// Illeagal Shadowing
    console.log(a);
  }
  console.log(a);
}

test();

//let cannot be redeclared within the same scope
//var can be redeclared
