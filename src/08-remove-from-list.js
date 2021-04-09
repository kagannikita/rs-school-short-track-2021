/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let l2 = { ...l };
  let head = l2;

  if (head.value === k) {
    head.value = null;
    head = head.next;
    l2 = head;
  }
  while (head.next) {
    if (head.next.value === k) {
      if (head.next.next === null) {
        head.next = null;
      } else {
        head.next = head.next.next;
      }
    }
    head = head.next;
  }
  return l2;
}

module.exports = removeKFromList;
