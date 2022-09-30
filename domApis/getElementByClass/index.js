/*
The node returned from this method are actual html nodes,
you can do any operation you want to do on them.
*/

if (!document.findByClass) {
  document.findByClass = async function (className){
    var root = this.body;
    function searchNodes(node){
      var nodes = [];
      if(node.classList.contains(className)){
        nodes.push(node);
      }
      for(let i=0; i< node.children.length ; i++){
        nodes = nodes.concat(searchNodes(node.children[i]))
      }
      return nodes;
    }
    return searchNodes(root);
  }
}

var nodes = document.findByClass('test');
console.log('nodes are', nodes);
    

/*
You can convert a NodeList into an array using either one of the following methods.
1. Using the destructuring syntax.
2. Using the Array.from() method.
Link : https://stackoverflow.com/a/3199627/6467710
*/ 