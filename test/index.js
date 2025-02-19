// function indexed(nums, target) {

//   // for (let i = 0; i < nums.length; i++) {
//   //   const sum = nums[i] + nums[i + 1];
//   //   if (sum === target) {
//   //     return [i, i + 1]
//   //   }
//   // }
//     const hashMap = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (hashMap.has(complement)) {
//             return [hashMap.get(complement), i];
//         }
//         hashMap.set(nums[i], i);
//     }
//     return []; 
// };

// Example usage:
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]


// console.log(indexed([2, 7, 11, 15], 9));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] // (nums[0] + nums[1] = 9)


//-----------------------------------------------------------------------------------------------------


// Input: nums = [3,0,1]  
// Output: 2 // (Missing number is 2)

// function missing(arr) {
//   const max = Math.max(...arr);
//   let count  = 0;
//   for(let i=0; i<= max ; i++){
//     if(!arr.includes(count)){
//       return count;
//     };
//     count+=1;
//   }
// }
// console.log(missing([3, 0, 1]))


var maxProfit = function(prices) {
  let minPrice = Infinity;  // Store the minimum price so far
  let maxProfit = 0;  // Track maximum profit

  for (let price of prices) {
      if (price < minPrice) {
          minPrice = price; // Update minimum price
      } else {
          maxProfit = Math.max(maxProfit, price - minPrice); // Calculate profit and update maxProfit
      }
  }

  return maxProfit; // Return max profit found
};

// Example Runs
console.log(maxProfit([7,1,5,3,6,4]));  // Output: 5
console.log(maxProfit([7,6,4,3,1]));    // Output: 0
