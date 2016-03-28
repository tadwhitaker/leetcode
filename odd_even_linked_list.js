var Node = function(value) {
  this.storage = {};
  this.storage.value = value;
  this.storage.next = null;
};

var evenOdd = function(list) {
  if (list.storage.next === null) {
    return;
  } else {
    console.log("Value is ", list.storage.value);
    evenOdd(list.storage.next);
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
 }

 var deleteNode = function(node) {

 };