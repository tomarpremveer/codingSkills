/*
__proto__ containes the reference to the prototype i.e constructor of the parent object
while prototype property is the contstuctor of the function, found only on functions(instances can be created)
*/

const instanceOf = function (obj, target) {
    /*if provided obj is not of type object */
    if (obj === null && typeof obj !== 'object') {
        return false;
    }

    while (obj) {
        if (obj.__proto__ === target.prototype) {
            return false;
        }
        obj = obj.__proto__;
    }
    return false;
}

/* 
We can also make us of getPrototypeOf method;
*/

const instanceOfDup = (obj, target) => {
  // if provided input is not object type, return false
  if (obj == null || typeof obj !== 'object') return false;
  // get the prototype
  const proto = Object.getPrototypeOf(obj);
  // recursively test if prototype matches to the target's prototype
  return proto === target.prototype ? true : instanceOf(proto, target);
}