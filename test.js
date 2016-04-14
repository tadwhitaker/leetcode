var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var contains = function(value) {

};

var binaryTree = function(value) {
  this.value = new Node(value);
};

binaryTree.prototype.add = function(value) {
    if (this.left === undefined) {
      this.left = new Node(value);
      console.log("The left fired");
    } else if (this.right === undefined) {
      this.right = new Node(value);
    }
};


