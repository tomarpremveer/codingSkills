/*
Promise.allSettled polyfill.

1. Takes an array of promises.
2. Returns an promise which fulfills to an array which contains the outcome of each promise.


*/

if (!Promise.myAllSettled) {
    Promise.myAllSettled = function (promises) {
         const results = [];
        if (promises instanceof Object) {
            throw new TypeError("Object is not iterable")
        }
    
    const promiseWithResults = new Promise((resolver, failure)=>{
      if(promises.length == 0){
        resolver(results);
      }
        for (let i = 0; i < promises.length; i++){
            if (promises[i] instanceof Promise) { /* If value passed is a promise */
                promises[i]
                .then(result => {
                    results.push(result);
                })
                .catch(error => {
                    results.push(error);
                })
                .finally(() => {
                    if(results.length == promises.length){
                        resolver(results);
                    }    
                })
            } else { /* If value passed is not a promise, then append directly */
                results.push(promises[i])
            }
            if(results.length == promises.length){
                resolver(results);
            }
        }
    })
    return promiseWithResults;
  }
}

const p1 = new Promise((resolve) => resolve(1))
const p2 = new Promise((resolve,reject) => resolve('this is the error'))
const p3 = new Promise((resolve) => resolve(3));
const promises = [p1,p2,p3]

Promise.myAllSettled(promises)
.then(results => console.log('results are', results))
.catch(error => console.error(error));
