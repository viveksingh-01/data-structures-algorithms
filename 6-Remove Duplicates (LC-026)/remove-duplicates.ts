/**
 * LEETCODE-26
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * APPROACH: Two-pointer method
 * @param nums array of numbers
 * @returns array with unique values
 */
function removeDuplicates(nums: number[]): number {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[x]) {
      nums[x + 1] = nums[i];
      x++;
    }
  }
  return x + 1;
}
