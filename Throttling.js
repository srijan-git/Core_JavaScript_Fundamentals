let counter = 0;
const getData = () => {
  console.log("Throttling call : ", counter++);
};

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};

const processThrottle = throttle(getData, 1000);
