/*
A curry function is a fn that takes a fn which takes multiple arguments and 
returns a func that takes a single argument.
*/

/*
Partial Application : Process of applying a fn to some of it's arguments.
 The Partially applied function get returned for later use.
 Done using bind method.
*/

function curry(fn) {
  return function curriedFn(...args){
      if (fn.length == args.length) {
        /*Checks whether number of args passed are equal to the args required by the fn
        if yes, call the function with the arguments.
        */
      return fn.apply(this,args)
    }else{/*  else return a function which takes more arguments */
      return function(...args2){
        return curriedFn.apply(this,args.concat(args2))
      }
    }
  }
}

const sum = (a,b) => a + b 
const curriedSum = curry(sum)
const AddFiveToSum = curriedSum(5)
const AddSixToSum = AddFiveToSum(6);
console.log("and the sum is",AddSixToSum)