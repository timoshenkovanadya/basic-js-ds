const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let newList = l;
  while (newList?.next) {
    if (newList.next?.value === k) {
      newList.next = newList.next.next;
    } else {
      newList = newList.next;
    }
  }
  if (l.value === k) {
    return l.next;
  }
  return l;
  // console.log(l, "----------------------l");
  // let list = null;
  // const reversedArr = l.reverse();
  // reversedArr.forEach((number) => {
  //   if (number === k) return;
  //   const newObj = new ListNode(number);
  //   if (!list) {
  //     list = newObj;
  //   } else {
  //     newObj.next = list;
  //     list = newObj;
  //   }
  // });
}

module.exports = {
  removeKFromList,
};
