/*
Promise.any 
Takes an array of promises and returns a single promise that fulfills as soon as
any of the promises in the array fulfills. if no promise is fulfilled then it returns
an aggregation error.

*/

function promiseAny(...promises) {
  return new Promise((resolve, reject) => {
    let rejected = [];
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      if (promise instanceof Promise) {
        Promise.resolve(promise)
        .then(result => {
            resolve(result);
          })
          .catch((err) => {
            rejected.push(err);
            if (rejected.length === promises.length) {
              reject(rejected);
            }
          })
      } else {
        resolve(promise);
      }
    }
  })
}


const test1 = new Promise(function(resolve, reject) {
  setTimeout(reject, 500, 'one');
});
const test2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 600, 'two');
});
const test3 = new Promise(function(resolve, reject) {
  setTimeout(reject, 200, 'three');
});

promiseAny(...[test1, test2, test3]).then(function(value) {
  // first and third fails, 2nd resolves
  console.log("value", value);
}).catch(function(err) {
  console.log("Err", err);
});
