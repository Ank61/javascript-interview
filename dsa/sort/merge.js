function mergeSort(arr) {
    if (arr.length < 2){
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    console.log("Incoming", left, right);
    let sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

console.log(mergeSort([5, 3, 8, 4, 2]));


// function merge(arr) {
//     if (arr.length < 2) {
//         return arr
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = merge(arr.slice(0, mid));
//     let right = merge(arr.slice(mid));

//     return mergeSoritng(left, right);
// }

// function mergeSoritng(left, right) {
//     const sorted = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sorted.push(left.shift())
//         }
//         else {
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted, ...left, ...right]
// }

// console.log(merge(5,4,23,1,1,34,5))