/*
Promisify a function mean transforming a function which follows callback design
to something which follows promise approach.

Why?
1. With callback, if you want to do something sequentially you will have to
specify an error argument which is redundant. With promises you can just add a
catch block which will just catch any errors that occured in the promise chain.
2. Makes code more readable.

Links:
1.https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/
2.https://javascript.info/promisify
*/

function promisify(func) {
  return function promisifiedFunction(...args){
    return new Promise((resolve, reject) =>{
      function customCallback(err,result){
        if(err){
          reject(err);
        }else{
          resolve(result);
        }
      }
      args.push(customCallback)
      func.call(this,...args);
    })
  }
}

/*We can also accomodate a callback accepting multiple arguments.
fn customCallback(err, ....results){
    if(err){
          reject(err);
    }else{
          resolve (results.length == 0 ? results[0] : results)
    }
}
*/