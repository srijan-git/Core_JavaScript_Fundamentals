const grandParent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Event Bubbling
// grandParent.addEventListener("click", function () {
//   console.log("Grand parent div bubble out");
// });

// parent.addEventListener("click", function () {
//   console.log("Parent div bubble out");
// });

// child.addEventListener("click", function () {
//   console.log("Child div bubble out");
// });

// Event Capturing
// grandParent.addEventListener(
//   "click",
//   function () {
//     console.log("Grand parent div Captured");
//   },
//   { capture: true }
// );

// parent.addEventListener(
//   "click",
//   function () {
//     console.log("Parent div Captured");
//   },
//   { capture: true }
// );

// child.addEventListener(
//   "click",
//   function () {
//     console.log("Child div Captured/");
//   },
//   { capture: true }
// );

// How to Stop Propogation
grandParent.addEventListener("click", function () {
  console.log("Grand parent div bubble out");
});

parent.addEventListener("click", function (e) {
  console.log("Parent div bubble out");
  e.stopPropagation(); //Propogation will be stopped here
});

child.addEventListener("click", function () {
  console.log("Child div bubble out");
});
