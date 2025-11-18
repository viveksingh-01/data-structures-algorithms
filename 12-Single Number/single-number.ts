/**
 * Given a non-empty array of integers nums,
 * every element appears twice except for one. Find that single one.
 *
 * NOTE: We must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 *
 * IDEA: Using XOR operator we cancel out the duplicate numbers
 * at the end, the remaining number will be the result.
 */
function singleNumber(nums: number[]): number {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }
  return xor;
}
