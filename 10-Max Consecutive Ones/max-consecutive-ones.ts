/**
 * LEETCODE-485
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * IDEA: Keep a counter to count the number of 1's and a separate variable to keep a track of maximum counter value
 * @returns the maximum number of consecutive 1's
 */
function findMaxConsecutiveOnes(nums: number[]): number {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
}
