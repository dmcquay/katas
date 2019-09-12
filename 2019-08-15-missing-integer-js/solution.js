"use strict";

module.exports = function solution(nums) {
  const numMap = {};
  for (let num of nums) {
    if (num < 1) continue;
    numMap[num] = true;
  }
  let result = 1;
  while (numMap[result]) {
    result++;
  }
  return result;
};

// function sortNumber(a, b) {
//   return a - b;
// }

// module.exports = function solution(nums) {
//   nums.sort(sortNumber);
//   let prev = nums[0];
//   for (let num of nums) {
//     if (prev > 0 && num - prev > 1) return prev + 1;
//     prev = num;
//   }
//   return Math.max(prev + 1, 1);
// };
