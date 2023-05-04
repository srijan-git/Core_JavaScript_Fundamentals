let name = {
  firstName: "Srijan",
  lastName: "Khan",
  //   printName: function (HomeTown, state) {
  //     console.log(
  //       this.firstName + " " + this.lastName + ", " + HomeTown + ", " + state
  //     );
  //   }
};

let printName = function (HomeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + HomeTown + ", " + state
  );
};

let name2 = {
  firstName: "Kankana",
  lastName: "Das",
};

/* Normal Function Calling
 name.printName("Budge Budge", "West bengal");
 */

/*  Function Borrowing
name.printName.call(name2, "Budge Budge", "West Bengal");
name.printName.apply(name2, ["Budge Budge", "West Bengal"]);
*/

printName.call(name2, "Budge Budge", "West Bengal");
printName.apply(name2, ["Budge Budge", "West Bengal"]);
let printMyName = printName.bind(name2, "Budge Budge", "West Bengal");
