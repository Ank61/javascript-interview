//------------------------------------------------------------------------------------------------
//BruteForce
// function largest(arr){
//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(largest([1, 8, 7, 56, 90]))

//------------------------------------------------------------------------------------------------
//Second Largest Element in an Array without sorting
//Brute-force
// function secondLargest(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = secondLargest(arr.slice(0, mid));
//     let right = secondLargest(arr.slice(mid));

//     return sorting(left, right);
// }

// function sorting(left, right) {
//     let sorted = []
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sorted.push(left.shift())
//         }
//         else {
//             sorted.push(right.shift());
//         }
//     }
//     return [...sorted, ...left, ...right];
// }

// const sortedArray = secondLargest([1, 8, 7, 56, 90]);

//Optimization
// function secondLargest(arr) {
//     let max = 0;
//     let prevMax = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(max<arr[i]){
//             prevMax = max;
//             max = arr[i];
//         }
//     }
//     return prevMax;
// }

// console.log(secondLargest([1, 8, 7, 56, 90]))

//---------------------------------------------------------------------------------------------
//Check if Array Is Sorted and Rotated
//Original --> Sorted and Rotated --> Given

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].

// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.

// function originalSorted(nums) {
//     let roatedCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > nums[(i + 1) % nums.length]) {
//             roatedCount++;
//         }
//     }
//     return roatedCount === 1
// }
// console.log(originalSorted([2, 1, 3, 4]))
//Solution :
//Identify the number of decreases (drops) in the array.
// A sorted array should have elements in non-decreasing order.
// If an array is rotated, there should be exactly one drop (decrease) where nums[i] > nums[i+1].
// If there is more than one drop, it means the array is neither sorted nor a valid rotation.

//---------------------------------------------------------------------------------------------

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// var removeDuplicates = function (nums) {
//     const map = new Map();
//     const testArray = [];
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], nums[i]);
//             testArray.push(nums[i]);
//         }
//         else {
//             count++;
//         }
//     }
//     let j = 0;
//     while (j < count) {
//         testArray.push("_");
//         j++;
//     }
//     nums = testArray;
//     console.log(nums)
//     return nums.length - count
// };

// var removeDuplicates = function (nums) {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0 || nums[i] !== nums[i - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     for (let i = k; i < nums.length; i++) {
//         nums[i] = "_";
//     }

//     return k;
// };
// console.log(removeDuplicates([1, 1, 2]))

//---------------------------------------------------------------------------------------------

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// var rotate = function(nums, k) {
//     let n = nums.length;
//     k = k % n;

//     function reverse(start, end) {
//         while (start < end) {
//             [nums[start], nums[end]] = [nums[end], nums[start]];
//             start++; end--;
//         }
//     }

//     reverse(0, n - 1);
//     reverse(0, k - 1);
//     reverse(k, n - 1);

//     return nums;
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))

//---------------------------------------------------------------------------------------------

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// var moveZeroes = function (nums) {
//     nums.sort((a, b) => nums[a] - nums[b]);
//     let intial = 0;
//     let countZero = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[intial] = nums[i];
//             intial++
//         }
//         else{
//             countZero++
//         }
//     }
//     for(let j=nums.length-countZero;j<nums.length; j++){
//         nums[j]=0
//     }
//     return nums
// };

// var moveZeroes = function (nums) {
//     let intial = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[intial] = nums[i];
//             intial++
//         }
//     }
//     const zeroes = nums.length - intial;
//     console.log(zeroes);
//     for (let i = intial; i <nums.length; i++) {
//         nums[i] = 0;
//     }
//     return nums;
// }
// console.log(moveZeroes([1,0]))

//---------------------------------------------------------------------------------------------
// Three Sum problem
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// var threeSum = function (nums) {
//   const output = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         if (sum === 0) {
//           const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//           output.add(triplet.toString());
//         }
//       }
//     }
//   }
//   return Array.from(output).map((item) => item.split(",").map(Number));
// };

// var threeSum = function (nums) {
//   const result = [];
//   nums.sort((a, b) => a - b); // Sort the array

//   for (let i = 0; i < nums.length - 2; i++) {
//     // Skip duplicates for the first number
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);

//         // Skip duplicates for the second and third numbers
//         while (left < right && nums[left] === nums[left + 1]) left++;
//         while (left < right && nums[right] === nums[right - 1]) right--;

//         left++;
//         right--;
//       } else if (sum < 0) {
//         left++; // Need a bigger sum
//       } else {
//         right--; // Need a smaller sum
//       }
//     }
//   }

//   return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//---------------------------------------------------------------------------------------------------
// Example 1:
// Input Format: N = 6, array[] = {9, -3, 3, -1, 6, -5}
// Result: 5
// Explanation: The following subarrays sum to zero:
// {-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
// Since we require the length of the longest subarray, our answer is 5!

// function longSub(arr) {
//   let maxLength = 0;
//   let sum = 0;
//   const sumMap = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (sum === 0) {
//       maxLength = i + 1; // whole subarray from 0 to i
//     }

//     if (sumMap.has(sum)) {
//       const prevIndex = sumMap.get(sum);
//       maxLength = Math.max(maxLength, i - prevIndex);
//     } else {
//       sumMap.set(sum, i); // store first occurrence
//     }
//   }

//   return maxLength;
// }

// console.log(longSub([9, -3, 3, -1, 6, -5]));
