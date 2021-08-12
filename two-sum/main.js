/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    while (j < nums.length && i !== j) {
      if (nums[i] + nums[j] === target) return [i, j];
      j++;
    }
  }
};
