function MyPromise(executor) {
  /* callback to be called when promise resolves or rejects, confgiured using .then and .catch methods */
  let onResolve, onReject;

  /*Status flags */

  let [fullfilled, rejected, called] = [false, false, false];
  let value;

  function resolve(v) {
    fullfilled = true;
    value = v;
    if (typeof onResolve === 'function') {
      onResolve(value);
      called = true;
    }
  }

  function reject(reason) {
    rejected = true;
    value = reason;

    if (typeof onReject === 'function') {
      onReject(value);
      called = true;
    }

  }


  this.then = function(callback) {
    onResolve = callback;
    /* this case can be there when callback passed to then or catch method isn't a function  */
    if (fullfilled && !called) {
      called = true;
      onResolve(value);
    }
    return this;
  }

  this.catch = function(callback) {
    onReject = callback;
    if (rejected && !called) {
      called = true;
      onReject(value);
    }
    return this;
  }
  
  try{
  	executor(resolve, reject);
  }catch(error){
  	reject(error);
  }
}



