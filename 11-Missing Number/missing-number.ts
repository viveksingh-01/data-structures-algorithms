/**
 * LEETCODE-268
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * IDEA: Since the range is expected to contain consecutive numbers,
 * we calculate the sum of the numbers from 1 to n and store in expectedTotal
 * we then calculate the actual sum of the numbers in nums, stored in actualTotal.
 * The difference in these totals gives us the missing number.
 */
function missingNumber(nums: number[]): number {
  let expectedTotal = 0;
  let actualTotal = 0;
  for (let i = 1; i <= nums.length; i++) {
    expectedTotal += i;
    actualTotal += nums[i - 1];
  }
  return expectedTotal - actualTotal;
}
