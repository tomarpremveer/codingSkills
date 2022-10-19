/*
Problem with this approach extra memory for every instance.
Prototype aprroach would be efficient.
*/
function localStorage() {
  var store = new Map();
  
  function getItem(key){
    return store.get(String(key));
  }
  function setItem(key,value){
    /*String constructor for non-primitives data types */
    store.set(String(key),String(value))
  }
  function removeItem(key){
    store.delete(String(key));
  }
  function clear(){
    store.clear();
  }
  return {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem,
    clear: clear,
    get length(){
      return store.size;
    },
  }
}

const localStore = localStorage()
console.log(localStore.length)
localStore.setItem('a','b')
console.log(localStore.length)
localStore.removeItem('a')
console.log(localStore.length)
localStore.setItem(()=>{},1);
console.log('this',localStore.getItem(()=>{}))
