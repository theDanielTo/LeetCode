/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let sorted = new ListNode(0);
  let sortedHead = sorted;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      sorted.next = l1;
      l1 = l1.next;
    } else {
      sorted.next = l2;
      l2 = l2.next;
    }
    sorted = sorted.next;
  }

  sorted.next = !l1 ? l2 : l1;

  return sortedHead.next;
};
