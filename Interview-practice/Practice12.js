//!Promises in JavaScript
//!Synchronous vs Asynchronous code

//! Example (Sync):
// console.log("Start");
// console.log("Hey Srijan");
// console.log("Finish");
//* Code will be executed line by line

//! Example (Async)
// console.log("Start");
// setTimeout(() => {
//   console.log("Hey Srijan");
// });
// console.log("Finish");

//! What is callBack?
// console.log("Start");
// function importantAction(userName, cb) {
//   setTimeout(() => {
//     cb(`Hey ${userName}`);
//   }, 1000);
// }

// const message = importantAction("Srijan Kumar Khan", (message) => {
//   console.log(message);
// });
// console.log("Finish");

//!CallBack Hell:
// console.log("Start");
// function importantAction(userName, cb) {
//   setTimeout(() => {
//     cb(`Hey ${userName}`);
//   }, 1000);
// }

// function likeThisContent(content, cb) {
//   setTimeout(() => {
//     cb(`Love ${content} `);
//   }, 1000);
// }
// function shareTheContent(content, cb) {
//   setTimeout(() => {
//     cb(`Share ${content} `);
//   }, 1000);
// }

// const message = importantAction("Srijan Kumar Khan", (message) => {
//   console.log(message);
//   likeThisContent("JavaScript", function (like) {
//     console.log(like);
//     shareTheContent("JavaScript Prep Topics", (share) => {
//       console.log(share);
//       shareTheContent("JavaScript Prep Topics", (share) => {
//         console.log(share);
//         shareTheContent("JavaScript Prep Topics", (share) => {
//           console.log(share);
//           shareTheContent("JavaScript Prep Topics", (share) => {
//             console.log(share);
//             shareTheContent("JavaScript Prep Topics", (share) => {
//               console.log(share);
//             });
//           });
//         });
//       });
//     });
//   });
// });
// console.log("Finish");

// * So to avoid such callback hell scenario Promise is there to overcome such issues

//!Promises Example
// console.log("Start");
// const promisedByChild = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result)
//       resolve("Child fulfil the promise which was made to his mother");
//     reject(
//       new Error(
//         "Child didn't fulfil the promise which was made to his mother thus gets punishment  "
//       )
//     );
//   }, 2000);
// });

// promisedByChild
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("Finish");

//! Now How to solve CallBack hell issue using promise

function importantAction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hey ${userName}`);
    }, 500);
  });
}

function likeThisContent(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Love ${content} `);
    }, 100);
  });
}
function shareTheContent(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share ${content} `);
    }, 500);
  });
}

//* Approach 1
// console.log("Start");
// importantAction("Srijan Kumar Khan")
//   .then((res) => {
//     console.log(res);
//     likeThisContent("JavaScript")
//       .then((res) => {
//         console.log(res);
//         shareTheContent("JavaScript Prep Topics")
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("Finish");

// * Approach 2 : Promise Chaining
// console.log("Start");
// importantAction("Srijan Kumar Khan")
//   .then((res) => {
//     console.log(res);
//     return likeThisContent("JavaScript");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareTheContent("JavaScript Prep Topics");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("Finish");

// * Approach 3 : Promise Combinators (promise.all)
// Promise.all([
//   importantAction("Srijan Kumar Khan"),
//   likeThisContent("JavaScript"),
//   shareTheContent("JavaScript Prep Topics"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error("Promises failed", err));

// * Approach 3 : Promise Combinators (promise.race)
// console.log("Start");
// Promise.race([
//   importantAction("Srijan Kumar Khan"),
//   likeThisContent("JavaScript"),
//   shareTheContent("JavaScript Prep Topics"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("Promises failed", err);
//   });
// console.log("Stop");

// * Approach 3 : Promise Combinators (promise.allSettled)
// console.log("Start");
// Promise.allSettled([
//   importantAction("Srijan Kumar Khan"),
//   likeThisContent("JavaScript"),
//   shareTheContent("JavaScript Prep Topics"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("Promises failed", err);
//   });
// console.log("Stop");

// * Approach 3 : Promise Combinators (promise.any)
// console.log("Start");
// Promise.any([
//   importantAction("Srijan Kumar Khan"),
//   likeThisContent("JavaScript"),
//   shareTheContent("JavaScript Prep Topics"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error("Promise is rejected: ", err);
//   });
// console.log("Stop");

//! Async and await example
// console.log("Start");
// const result = async () => {
//   try {
//     const message1 = await importantAction("Srijan Kumar Khan");
//     console.log(message1);
//     const message2 = await likeThisContent("JavaScript");
//     console.log(message2);
//     const message3 = await shareTheContent("JavaScript Prep Topics");
//     console.log(message3);
//   } catch (error) {
//     console.error("Promises Failed: ", error);
//   }
// };
// result();
// console.log("Stop");

//! Question 1 : What's the output?
// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });
// promise1.then((res) => console.log(res));
// console.log("End");

//! Question 2 : What's the output?
// console.log("Start");

// const promise2 = new Promise((resolve, reject) => {
//   console.log(1);
//   console.log(3);
// });
// promise2.then((res) => console.log(res));
// console.log("End");

//! Question 3 : What's the output?
// console.log("Start");

// const func = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("Success");
//   });

// console.log("Middle");
// func().then((res) => {
//   console.log(res);
// });

// console.log("End");

//! Question 4 : What's the output?
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();
// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });

//! Question 5 : What's the output?
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("Success");
//     } else {
//       reject("Error");
//     }
//   });
// }

// let promise = job(true);
// promise
//   .then(function (data) {
//     console.log(data);
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error Caught"; //this will take as true
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//! Question 6 : What's the output?
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("Success");
//     } else {
//       reject("Error");
//     }
//   });
// }

// let promise = job(true);
// promise
//   .then(function (data) {
//     console.log(data); //resolve(Success)
//     return job(true);
//   })
//   .then(function (data) {
//     if (data !== "Victory") {
//       throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error); //Defeat
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return job(false);
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "Error Caught";
//   })
//   .then(function (data) {
//     console.log(data);
//     return new Error("Test");
//   })
//   .then(function (data) {
//     console.log("Success :", data.message);
//   })
//   .catch(function (data) {
//     console.log("Error :", data.message);
//   });

//! Question 7 : What's the output?(Promise Chaining)

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("FirstPromise");
// });
// const SecondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// SecondPromise.then((res) => {
//   return res;
// }).then((res) => {
//   console.log(res);
// });

//! Question 8 : Rewrite this example code using `async/await`
//!              instead of `.then/catch

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((error) => {
//   console.log(error);
// });

// * Code refactor
// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }
//   throw new Error(response.status);
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((error) => {
//   console.log(error);
// });
// * Code refactor

//! Question 9 : promise recursively

function promRecurse(funcPromise) {
  if (funcPromise.length === 0) return;
  const currentPromise = funcPromise.shift();
  currentPromise
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  promRecurse(funcPromise);
}

promRecurse([
  importantAction("Srijan Kumar khan"),
  likeThisContent("JavaScript"),
  shareTheContent("JavaScript Prep Topics"),
]);
