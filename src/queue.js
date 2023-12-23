const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// { value: 3, next: null }
// queue.enqueue(1)
// {
//   value: 3;
//   next: {
//     value: 7;
//     next: null;
//   };
// }
class Queue {
  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(element) {
    let currentLast = this.queue;
    while (currentLast?.next) {
      currentLast = currentLast.next;
    }
    if (!this.queue) {
      this.queue = { value: element, next: null };
    } else {
      currentLast.next = { value: element, next: null };
    }
  }

  dequeue() {
    const res = this.queue?.value || null;
    this.queue = this.queue?.next || null;
    return res;
  }
}

module.exports = {
  Queue,
};
