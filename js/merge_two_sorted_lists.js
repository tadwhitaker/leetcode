function ListNode(val) {
  this.val = val;
  this.next = null;
  this.delete = function() {
    console.log(this.val);
    delete this.val;
  };
}

var Odds = new ListNode(1);
Odds.next = new ListNode(3);
Odds.next = new ListNode(5);

var Evens = new ListNode(2);
Evens.next = new ListNode(4);
Evens.next = new ListNode(6);

function MergeLists(list1, list2) {
  console.log(list1.val);
  console.log(list2.val);
  if (list1.val < list2.val) {
    list1.next = MergeLists(list1.next, list2);
    return list1;
  } else {
    list2.next = MergeLists(list2.next, list1);
    return list2;
  }
}

MergeLists(Odds, Evens);