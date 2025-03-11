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

// Input: arr[] = [1, 2, 3, 4, 6], k = 6
// Output: true
// Exlpanation: Since, 6 is present in
// the array at index 4 (0-based indexing), output is true.

// function searchInSorted(arr, k) {
//   if (arr.length < 1) {
//     return false;
//   }
//   const mid = Math.floor(arr.length / 2);
//   if (arr[mid] === k) {
//     return true;
//   } else {
//     if (arr[mid] < k) {
//       return searchInSorted(arr.slice(mid + 1), k);
//     } else {
//       return searchInSorted(arr.slice(0, mid), k);
//     }
//   }
// }
// console.log(searchInSorted([1, 2, 3, 4, 6], 6));

//---------------------------------------------------------------------------------------------
// Input: nums = [3,0,1]

// Output: 2

// Explanation:

// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

// var missingNumber = function (nums) {
//   const sortedNumsLength = nums.sort((a, b) => a - b);
//   const arrayNums = [];
//   for (let i = 0; i <= nums.length; i++) {
//     arrayNums.push(i);
//   }
//   let count = 0;
//   const maxLength =
//     sortedNumsLength.length > arrayNums.length ? sortedNumsLength : arrayNums;
//   const minLength =
//     sortedNumsLength.length < arrayNums.length ? sortedNumsLength : arrayNums;
//   for (let i = 0; i < maxLength.length; i++) {
//     if (maxLength[i] !== minLength[count]) {
//       return count;
//     }
//     count++;
//   }
//   return 0;
// };

// var missingNumber = function(nums) {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;  // Sum of first n natural numbers
//     const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of elements in nums
//     return expectedSum - actualSum; // The missing number
// };

// // ✅ Example Test Cases
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
// console.log(missingNumber([3, 0, 1])); // Output: 2
// console.log(missingNumber([0, 1])); // Output: 2
// console.log(missingNumber([1])); // Output: 0

// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

//-----------------------------------------------------------------------------------

// function findUnion(a, b) {
//   const map = new Map();
//   for (let i = 0; i < a.length; i++) {
//     if (!map.has(a[i])) {
//         map.set(a[i],a[i]);
//     }
//   }

//   for (let i = 0; i < b.length; i++) {
//     if (!map.has(b[i])) {
//         map.set(b[i],b[i]);
//     }
//   }

//   return [...map.values()]
// }

// console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));

//-------------------------------------------------------------------------------
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];
//       if (sum === target) {
//         return [i,j]
//       }
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const short = target - nums[i];
//     if (map.has(nums[i])) {
//       return [map.get(nums[i]), i];
//     }
//     map.set(short, i);
//   }
//   console.log(map);
// };

// console.log(twoSum([2, 7, 11, 15], 9));

//---------------------------------------------------------------------------------

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// var sortColors = function (nums) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 1);
//     } else {
//       const count = map.get(nums[i]);
//       map.set(nums[i], count + 1);
//     }
//   }

//   let counter = 0;
//   let arr = [];
//   while (arr.length < nums.length) {
//     const count = map.get(counter) || 0;
//     if (count > 0) {
//       arr.push(counter);
//       map.set(counter, count - 1);
//     } else {
//       counter++;
//     }
//   }
//   return arr;
// };

// // var sortColors = function(nums) {
// //   let low = 0, mid = 0, high = nums.length - 1;

// //   // Process elements until mid pointer passes high pointer.
// //   while (mid <= high) {
// //     if (nums[mid] === 0) {
// //       // Swap nums[low] and nums[mid] then increment both pointers.
// //       [nums[low], nums[mid]] = [nums[mid], nums[low]];
// //       low++;
// //       mid++;
// //     } else if (nums[mid] === 1) {
// //       // Move mid pointer for white color.
// //       mid++;
// //     } else if (nums[mid] === 2) {
// //       // Swap nums[mid] and nums[high] and decrement high pointer.
// //       [nums[mid], nums[high]] = [nums[high], nums[mid]];
// //       high--;
// //     }
// //   }
// // };

// console.log(sortColors([2, 0, 2, 1, 1, 0]));

//------------------------------------------------------------------------------------------

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// var singleNumber = function (nums) {
//   if(nums.length==1){
//     return nums[0]
//   }
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 1);
//     }
//     else {
//       const count = map.get(nums[i]);
//       map.set(nums[i], count + 1);
//     }
//   }

//   for (const [key, value] of map) {
//     if (value === 1) {
//       return key
//     }
//   }
//   return null
// };

// console.log(singleNumber([4, 1, 2, 1, 2]))

//----------------------------------------------------------------------------------------------
// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. 
// The length of the longest subarray with a sum of 15 is 6.

// function longestSubarray(arr, k) {
//   const final = [];
//   let sum = 0;
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       map.set(arr[i], i);
//       sum = sum + arr[i];
//       if (sum === k) {
//         console.log("sum", sum)
//         let temp = [];
//         for (const [key, value] in map) {
//           console.log(key)
//           temp.push(key);
//         }
//         final.push(temp);
//         sum = 0;
//       }
//     }
//     return final
//   }
// }
// function longestSubarray(arr, k) {
//   const final = [];
//   for (let i = 0; i < arr.length; i++) {
//     const output = [];
//     let sum = 0;
//     const map = new Map()
//     for (let j = i + 1; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum === k) {
//         output.push()
//         if (final.length < output.length) {
//           final = [...output];
//           output = [];
//         }
//       }
//     }
//   }
//   return final
// }

// console.log(longestSubarray([10, 5, 2, 7, 1, -10], 15))

//-------------------------------------------------------------------------------------------------

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// var maxProfit = function (prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] > prices[i]) {
//         const profit = prices[j] - prices[i];
//         if (profit > maxProfit) {
//           maxProfit = profit;
//         }
//       }
//     }
//   }
//   return maxProfit;
// };
//Optimized
// var maxProfit = function(prices) {
//   let minPrice = Infinity;  // Set to a very high value
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i]; // Update minimum price
//     } else {
//       maxProfit = Math.max(maxProfit, prices[i] - minPrice); // Calculate max profit
//     }
//   }

//   return maxProfit;
// };

// console.log(maxProfit([7,6,4,3,1]))

//----------------------------------------------------------------------------------------------------

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should return the array of nums such that the the array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]

// var rearrangeArray = function(nums) {
//   const positive = [];
//   const negative = [];
  
//   for (let num of nums) {
//       if (num > 0) {
//           positive.push(num);
//       } else {
//           negative.push(num);
//       }
//   }

//   const result = [];
//   for (let i = 0; i < positive.length; i++) {
//       result.push(positive[i]); 
//       result.push(negative[i]); 
//   }

//   return result;
// };

// console.log(rearrangeArray([3,1,-2,-5,2,-4]));