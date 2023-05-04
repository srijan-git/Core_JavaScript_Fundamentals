//Debouncing and Throttling

/*Question 1 : Create a button UI and debounce as follows -->
                --> Show "Button press <x> times" every time a button is pressed
                --> Increase "Triggered <Y> Times" count after 800 of debounce*/

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

//Creating our own implementation
function debounceOwnImplementation(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

//Using lodash library
const debouncedCount1 = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);

//Using own implementation
const debouncedCountOwn = debounceOwnImplementation(() => {
  count.innerHTML = ++triggerCount;
}, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   //   debouncedCount();
//   debouncedCountOwn();
// });

/*Question 1 : Create a button UI and throttle as follows -->
                --> Show "Button press <x> times" every time a button is pressed
                --> Increase "Triggered <Y> Times" count after 800ms of throttle*/

//Creating our own implementation
function ThrottlingOwnImplementation(func, timeout) {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, timeout);
    }
  };
}

//Using lodash library
const ThrottlingCount = _.throttle(() => {
  count.innerHTML = ++triggerCount;
}, 800);

//Using own implementation
const ThrottlingCountOwn = ThrottlingOwnImplementation(() => {
  count.innerHTML = ++triggerCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  //   ThrottlingCount();
  ThrottlingCountOwn();
});
