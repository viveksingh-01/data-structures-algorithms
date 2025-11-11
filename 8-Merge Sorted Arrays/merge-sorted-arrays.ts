/**
 * LEETCODE-88
 * Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function,
 * but instead be stored inside the array nums1.
 *
 * To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

/**
 * APPROACH-1
 * Time complexity: O(m+n)
 * Space complexity: O(m)
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if ((p1 < m && nums1Copy[p1] < nums2[p2]) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
}

/**
 * APPROACH-2
 * Using Two-pointers, iterate from last compare the elements in both the arrays
 * and fill the nums1 array with the larger number from last.
 * Time complexity: O(m+n)
 * Space complexity: O(1)
 */
function mergeOptimized(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if ((p1 >= 0 && nums1[p1] > nums2[p2]) || p2 < 0) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}
