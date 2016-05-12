var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, methods);
  return newTree;
};

var extend = function(to, from){
  for (var key in from) {
    to[key] = from[key];
  }
};

var methods = {};

methods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

methods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if(child.contains(target)) {
      return true;
    }
  }

  return false;
};





