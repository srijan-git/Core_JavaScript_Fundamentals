function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
let count = 0;
function saveInput() {
  console.log("Debouning call : ", count++);
}
const processDebouncing = debounce(() => saveInput());
