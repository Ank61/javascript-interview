// var subarraySum = function (nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     if (nums[i] === k) {
//       count++
//     }
//     for (let j = i + 1; j < nums.length; j++) {
//       sum = nums[j] + nums[i];
//       if (sum === k) {
//         count++;
//         break
//       }
//     }
//   }
//   return count;
// };

var subarraySum = function (nums, k) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};


console.log(subarraySum([-1, -1, 1], 0))