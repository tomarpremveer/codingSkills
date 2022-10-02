/*
    Array.reduce polyfill.
    1. returns a single value.
    2. executes a user supplied "reducer" callback on each element;
*/
Array.prototype.myReduce = function(callbackFn, initialValue){
  // callbackFn(accumaltor, currentValue,currentIndex, array)
    /*
    if empty array is provided and no initial value is provided, throw typeError.
    If initialValue is not provided, then first array element is used as initial value and iteration start from 1st index.
    If initialValue is provided, then traversal start from 0th index.
    */
    if (!this.length && !initialValue) { /* case 1 */
        throw new TypeError('Atleast provide initialValue or an array with atleast one element.')
    }
  let startingIndex = 0;
  let startingValue = initialValue;
  if(!startingValue){ /* case 2 */
    startingValue = this[0];
    startingIndex = 1;
  }
  for(let i= startingIndex; i< this.length; i++){
    startingValue = callbackFn(startingValue,this[i],i,this);
  }
  
  return startingValue;
}

const arr= [2,2,3]
const result = arr.myReduce((sum, curr) => sum * curr);
console.log('the result is', result);