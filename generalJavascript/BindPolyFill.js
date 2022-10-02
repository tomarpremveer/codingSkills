/*
Polyfill of bind

1. We can pass argument while applying bind
2. We can also pass argument while calling the function returned from my applying bind.
*/

Function.prototype.myBind = function(thisValue, ...args){
   var fn = this; 
   return function bindedFunction(...args1){
    return fn.call(thisValue,...args, args1)
  }
}

var obj1 = {
  name:'monty'
}

var obj2 = {
  name:'rahul',
  getName : function(a,b){
    return `${a} ${b} ${this.name}`;
  }
}
const getObj1Name = obj2.getName.myBind(obj1,"hi");
console.log(getObj1Name())

