import { createFilterPolyFill } from "./filterPolyfill.js";
import { createMapPolyFill } from "./mapPolyfill.js";


createMapPolyFill();
/*Test the myMap polyfill */
// const arr = [1, 2]
// const results = arr.myMap((x) => x * 2)
// console.log(results)


/*Test the myFilter polyfill */
createFilterPolyFill();
const arrForFilter = [1, 2, 3, 4, 5, 6]
const results = arrForFilter.myFilter(x => x%2 !== 0)
console.log('results are', results)