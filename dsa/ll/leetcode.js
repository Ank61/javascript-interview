// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }

//1. --> SWAP EVERY ALTERNATIVE NODE

var swapPairs = function (head) {
    if (head === null || head.next === null) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    console.log("Before")
    printLinkedList(current)
    while (current.next !== null && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;
        console.log("first", first);
        console.log("second", second);

        first.next = second.next;
        second.next = first;
        current.next = second;

        current = first;
        console.log("After swappingd first", first);
        console.log("After swappingd second", second);
    }
    console.log("After")
    printLinkedList(dummy.next)
    console.log(dummy === current)
    return current.next;
};

var swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    let temp = head.next
    let ans = swapPairs(head.next.next)
    head.next = ans
    temp.next = head
    return temp
};

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);
}

let head = createLinkedList([1, 2, 3, 4]);
let swappedHead = swapPairs(head);
console.log(swappedHead)
printLinkedList(swappedHead);


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


// 3. MERGE K SORTED LIST
