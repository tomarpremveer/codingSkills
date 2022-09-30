export function createFilterPolyFill() {
    if (!Array.prototype.myFilter) {
        Array.prototype.myFilter = function filterFunction(fn) {
            var array = this;
            var output = [];
            for (let i = 0; i < array.length; i++){
                var result = fn(array[i], i, array);
                if(result) { output.push(array[i])}
            }
            return output;
        }
    }
}