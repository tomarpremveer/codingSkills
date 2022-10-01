/*
Promise.all polyfill.
1. Takes an array of promises.
2. Returns an promise which fullfils to an array that contains the results of all the promises,
    every promise get fulfilled.
3. Rejects if any of the promise rejects with error of the rejected promise.

Case to be handled.
1. if number or pritives are supplied instead of promise, promise should instantly
    resolve with the primitives.
2. If empty array is provied, resolve with empty array.


Links:
1. https://medium.com/@copperwall/implementing-promise-all-575a07db509a
2. https://rajatexplains.com/promise-all
*/



if (!Promise.myAll) {
    Promise.myAll = function(promises){
        const results = [];
        if (
        typeof variable === 'object' &&
        variable !== null &&
        !Array.isArray(variable)
        ) {
            throw new TypeError('Object is not iterable');
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
                    if(results.length == promises.length){
                        resolver(results);
                    }
                })
                .catch(error => {
                    failure(error); 
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

Promise.myAll(promises)
.then(results => console.log('results are', results))
.catch(error => console.error(error));


Promise.myAll([])
.then(result => console.log('result is', result))
.catch(error => console.error(error));