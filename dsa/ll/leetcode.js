// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }

//1. --> SWAP EVERY ALTERNATIVE NODE

// var swapPairs = function (head) {
//     if (head === null || head.next === null) return head;
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let current = dummy;
//     console.log("Before")
//     printLinkedList(current)
//     while (current.next !== null && current.next.next !== null) {
//         let first = current.next;
//         let second = current.next.next;
//         console.log("first", first);
//         console.log("second", second);

//         first.next = second.next;
//         second.next = first;
//         current.next = second;

//         current = first;
//         console.log("After swappingd first", first);
//         console.log("After swappingd second", second);
//     }
//     console.log("After")
//     printLinkedList(dummy.next)
//     console.log(dummy === current)
//     return current.next;
// };

// var swapPairs = function (head) {
//     if (head === null || head.next === null) {
//         return head
//     }
//     let temp = head.next
//     let ans = swapPairs(head.next.next)
//     head.next = ans
//     temp.next = head
//     return temp
// };

// function createLinkedList(arr) {
//     let dummy = new ListNode();
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// function printLinkedList(head) {
//     let arr = [];
//     while (head !== null) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     console.log(arr);
// }

// let head = createLinkedList([1, 2, 3, 4]);
// let swappedHead = swapPairs(head);
// console.log(swappedHead)
// printLinkedList(swappedHead);

//2. --> MERGE SORTED LISTS
//      Input : list1 = [1,2,4], list2 = [1,3,4]
//      Output: [1,1,2,3,4,4]
// var mergeTwoLists = function(list1, list2) {
//     if (!list1) {
//      return list2;
//  }
//  if (!list2) {
//      return list1;
//  }
//  if (list1.val < list2.val) {
//      list1.next = mergeTwoLists(list1.next, list2)
//      return list1;
//  }
//  else {
//      list2.next = mergeTwoLists(list1, list2.next);
//      return list2;
//  }
// };

// function LinkedList(value, next) {
//     this.value = value === undefined ? 0 : value;
//     this.next = next === undefined ? null : next;
// }
// const createLinkedList = function (array) {
//     if (array.length === 0) return null;

//     let head = new LinkedList(array[0]);
//     let temp = head;

//     let current = 1;
//     while (current < array.length) {
//         temp.next = new LinkedList(array[current]);
//         temp = temp.next;
//         current++;
//     }

//     return head;
// };

// const list1 = createLinkedList([1, 2, 4])
// const list2 = createLinkedList([1, 3, 4])
// const merged = mergeList(list1, list2);
// console.log(merged)

// var mergeTwoLists = function(list1, list2) {
//     if (!list1) {
//      return list2;
//  }
//  if (!list2) {
//      return list1;
//  }
//  if (list1.val < list2.val) {
//      list1.next = mergeTwoLists(list1.next, list2)
//      return list1;
//  }
//  else {
//      list2.next = mergeTwoLists(list1, list2.next);
//      return list2;
//  }
// };

//-----------------------------------------------------------------------------------
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// var deleteNode = function(node) {
//     node.val = node.next.val;
//     node.next = node.next.next;
// };

// console.log(deleteNode())

//------------------------------------------------------------------------------------

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class Solution {
//     getCount(head) {
//         let node = head;
//         let length = 0;
//         while(node.next){
//             node = node.next;
//             length++;
//         }
//         return length;
//     }
// }
// const ll = new Solution();
// console.log(getCount());

//-------------------------------------------------------------------------------------
//Given a linked list of n nodes and a key, the task is to check if the key is
//  present in the linked list or not.

// class Solution {
//   /**
//    * @param {number} n
//    * @param {Node} head
//    * @param {number} key
//    * @returns {boolean}
//    */
//   searchKey(n, head, key) {
//     let node = head;
//     while (node.next) {
//         if(node.data === key){
//             return true;
//         }
//         node = node.next;
//     }
//     if(node.data===key){
//         return true
//     }
//     return false;
//   }
// }

//----------------------------------------------------------------------------
//Given the head of a linked list, return the list after sorting it in ascending order.
//Solution : Input: head = [4,2,1,3]
//         : Output: [1,2,3,4]

// var sortList = function(head) {
//     if (!head || !head.next) return head;

//     let slow = head, fast = head, prev = null;
//     while (fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     prev.next = null;

//     let l1 = sortList(head);
//     let l2 = sortList(slow);

//     return merge(l1, l2);
// };

// function merge(l1, l2) {
//     let dummy = new ListNode(0);
//     let current = dummy;

//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }

//     current.next = l1 ? l1 : l2;
//     return dummy.next;
// }

//----------------------------------------------------------------------------
