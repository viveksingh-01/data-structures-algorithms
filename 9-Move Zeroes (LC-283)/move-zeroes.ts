/**
 * LEETCODE-283
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 *
 * IDEA: Using Two-Pointers, we keep track of zero values and swap when we encounter non-zero values.
 */
function moveZeroes(nums: number[]): void {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i != k && nums[i] != 0) {
      nums[k] = nums[i];
      nums[i] = 0;
    }
    if (nums[k] != 0) k++;
  }
}
