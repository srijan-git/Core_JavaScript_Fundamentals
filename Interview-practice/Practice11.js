// Event Propagation
//!Question 1 : What is Event Propagation?

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

//!Question 2 : What is Event Bubbling?
// div.addEventListener("click", function () {
//   alert("div");
// });

// form.addEventListener("click", function () {
//   alert("form");
// });

// button.addEventListener("click", function () {
//   alert("button");
// });
// *There are few events that does not follow the event bubbling the property like focus blur etc

//!Question 3 : Difference btween event.target vs this.target vs  event.currentTarget?

// div.addEventListener("click", func);

// form.addEventListener("click", func);

// button.addEventListener("click", func);

// function func(event) {
//   alert(
//     "Current Target is: " +
//       event.currentTarget.tagName +
//       " , Target: " +
//       event.target.tagName +
//       ", This : " +
//       this.tagName
//   );
// }

//!Question 4 :What is Event Capturing/Trickling ?
// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   { capture: true }
// );

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   { capture: true }
// );

// button.addEventListener(
//   "click",
//   function () {
//     alert("button");
//   },
//   { capture: true }
// );

//!Question 5 : How to stop bubbling/capturing ?
// div.addEventListener("click", function (event) {
//   alert("div");
// });

// form.addEventListener("click", function (event) {
//   event.stopPropagation();
//   alert("form");
// });

// button.addEventListener("click", function (event) {
//   alert("button");
// });

//!Question 5 : What is Event Delegation ?
// document.querySelector(".product").addEventListener("click", function (event) {
//   console.log(event.target.closest("SPAN"));

//   if (event.target.tagName == "SPAN") {
//     console.log(event.target.textContent);
//     window.location.href += "/" + event.target.textContent;
//   }
// });

//!Question 5 : Create a modal which closes by clicking on negative space ?
const container = document.querySelector(".modalContainer");
const button = document.querySelector(".modalButton");

button.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(toggle) {
  container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (e) => {
  console.log(e.target.className);
  if (e.target.className === "modalContainer") {
    toggleModal(false);
  }
});
