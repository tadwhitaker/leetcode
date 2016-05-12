// Maximum depth of a binary tree

// var tree = {
//   value: 8,
//   left: {
//     value: 3,
//     left: {
//       value: 1,
//       left: null,
//       right: {
//         value: 6,
//         left: {
//           value: 4,
//           left: null,
//           right: null
//         },
//         right: {
//           value: 7,
//           left: null,
//           right: null
//         }
//       }
//     }
//   },
//   right: {
//     value: 10,
//     left: null,
//     right: {
//       value: 14,
//       left: {
//         value: 13,
//         left: {
//           value: 13,
//           left: null,
//           right: null
//         }
//       },
//       right: null
//     }
//   }
// };

// var sample = {
//   value: 100,
//   left: null,
//   right: null
// };

function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
};

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);

// Depth First Search
function dfs(node){
  if(node){
    console.log(node.value);
    dfs(node.left);
    dfs(node.right);
  }
}

