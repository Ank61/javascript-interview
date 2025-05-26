// Subarray Sum Equals K:
// Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals to k.

// Input: nums = [1,1,1], k = 2
// Output: 2

// Input: nums = [1,2,3], k = 3
// Output: 2

// var subarraySum = function (nums, k) {
//   const map = new Map();
//   let prefixSum = 0;
//   let count = 0;

//   for (let num of nums) {
//     prefixSum += num;
//     map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
//     if (prefixSum === k && map.has(prefixSum)) {
//       count += 1;
//     }

//     if (prefixSum === num) {
//       count += 1;
//     }
//   }
//   return count;
// };

// console.log(subarraySum([1, 1, 1], 2));

//---------------------------------------------------------------------------------------------------

var subarraySum = function (nums, k) {};

console.log();
