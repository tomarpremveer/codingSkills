function flat(arr, depth = 1) {
  return flatter(arr,depth);
}

function flatter(arr,depth){
  let flattenedArray = [];
  for(const element of arr){
    if(Array.isArray(element) && depth !==0 ){
      flattenedArray = [...flattenedArray, ...flatter(element,depth-1)]
    }else{
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}

function flatWithReduce(arr,depth=1) {
    const result = arr.reduce((acc, curr) => {
        if (Array.isArray(curr) && depth > 0) {
           return acc = [...acc,flatWithReduce(curr, depth-1)]
        } else {
           return acc.concat(curr);
        }
    }, [])
    return result;
}

const arr = [1, 2, 3, 4, 5]
console.log('flattenwithreduce',flatWithReduce(arr));

const reduced = flatWithReduce(arr)