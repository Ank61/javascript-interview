// function binarySearch(arr, target) {
//     let low = 0, high = arr.length - 1;

//     while (low <= high) {
//         let mid = low + Math.floor((high - low) / 2);

//         if (arr[mid] === target) return mid;  // Target found
//         else if (arr[mid] < target) low = mid + 1; // Search right half
//         else high = mid - 1;  // Search left half
//     }
//     return -1; // Target not found
// }

// // Example Usage:
// const arr = [1, 3, 5, 7, 9, 11, 15];
// console.log(binarySearch(arr, 7)); // Output: 3
// console.log(binarySearch(arr, 10)); // Output: -1


function binarySearch(num, target) {
    let low = 0;
    let high = num.length;

    while (low <= high) {
        let middle = Math.floor((high - low)/2);

        if(num[middle] ===target){
            return middle;
        }
        else if(num[middle]<=target){
            //target bigger ==> find middle in right
            low = middle+1;
        }
        else{
            high = middle-1
        }
    }
    return -1;

}

console.log(binarySearch([2, 4, 5, 6, 7, 98], 6))