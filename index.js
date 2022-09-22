import { createMapFn } from "./mapPolyfill.js";

createMapFn();
/*Test the myMap polyfill */
const arr = [1, 2]
const results = arr.myMap((x) => x * 2)
console.log(results)

