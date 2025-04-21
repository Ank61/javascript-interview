// Input: arr = [1, 2, 3, 4, 5]
// Output: LinkedList: 1->2->3->4->5
// Explanation: Linked list for the given array will be
// Given an array of integer arr. Your task is to construct the linked list from arr &
// return the head of the linked list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// class Solution {
//     construct(arr) {
//         this.head = null;
//         this.tail = null;
//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             const node = new Node(element);
//             if (!this.head) {
//                 this.head = node;
//                 this.tail = node;
//             }
//             else {
//                 this.tail.next = node;
//                 this.tail = node;
//             }
//         }
//         return this.head;
//     }
// }

//----------------------------------------------------------------------------------------------------------
//Given the head of a Singly Linked List and a value x, insert that value x at the end of the LinkedList
//and return the modified Linked List.

// class Solution {
//     insertAtEnd(head, x) {
//         let node = head;
//         let previousNode = null;
//         while (node.next) {
//             previousNode = node;
//             if(node.next){
//                 node = node.next;
//             }
//             else{
//                 const newNode = new Node(x);
//                 node.next = newNode;
//             }
//         }
//         return node;
//     }
// }

// How to detect a Cycle ? Slowpointer and fast pointer will meet at the same node
// How to find the index of the cycle start : use slowpointer and within the while loop use another loop to find the index

//------------------------------------------------------------------------

// [2,1,3,5,6,4,7] —> Array
// [1,2,3,4,5,6,7] —> indexes
// [1,3,5,7] —> [2,3,6,7]  —> odd indices
// [2,4,6] —> [ 1,5,4] —> Even indices
// Result = [2,3,6,7,1,,5,4]

// var oddEvenList = function(head) {
//     if(!head || !head.next){
//         return head
//     }

//   let oddIndex = head;
//   let evenIndex = head.next;
//   let eventHead = evenIndex;

//   while(evenIndex && evenIndex.next){
//     oddIndex.next = evenIndex.next;
//     oddIndex = oddIndex.next;

//     evenIndex.next = oddIndex.next;
//     evenIndex = evenIndex.next;
//   }
//     oddIndex.next = eventHead;
//   return head
// };

//--------------------------------------------------------------------
