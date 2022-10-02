
function flatter(obj,index,depth){
  let flattenedObject = {};
  for (const i in obj){
   if(checkIfObject(obj[i])){
     const indexHere = index.trim() ? `${index.trim()}.${i}` : i
	flattenedObject = 
      {...flattenedObject, ...flatter(obj[i],indexHere,depth+1)}
  }else{
    const indexx = depth > 0 ? `${index}.${i}` : i
    flattenedObject[indexx] = obj[i];
  }
}
  return flattenedObject;
}

function checkIfObject(value){
  if(typeof value == "object" && value !== null){
    return true;
  } 
  return false;
}

function flattenObject(obj){
  return flatter(obj,"",0)
}

const obj = {"A":"12","B":23,"C":{"P":23,"O":{"L":56},"Q":[1,2]},"D":4}
console.log(flattenObject(obj))