/*
We have used a BFS case-sensitive to search for the node with same id as provied.
This function will return the first node with id equal to the provided id.
*/

if(!document.findById){
  document.findById = function (id){
    var root = this.body;
    
    function searchNode(node){
      var queue = [node];
      while(queue.length){
        var pNode = queue.shift()
        var idOfNode = pNode.getAttribute('id');
         if(idOfNode == id){
           return pNode;
         }
        if(pNode.children){
          queue.push(...pNode.children);
        }
      }
      return null;
    }
    return searchNode(root);
  }
}


var nodes = document.findById('test');
console.log('node is', nodes);

