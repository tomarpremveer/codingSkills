/*
This is the polyfill of the very popular map function of the arrays.
*/

export function createMapPolyFill() {
    if (!Array.prototype.myMap) {
        Array.prototype.myMap = function something(fn) {
            var array = this;1
            var results = [];
            for (let i = 0; i < array.length; i++){
                results[i] = fn(array[i],i,array);
            }
            return results;
        }
    }
}

