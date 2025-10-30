/**
 * Counts the number of negative numbers in the given array.
 * Input should contain the list of finite numbers only, returns 0 otherwise.
 * @param arr input array from which the negative numbers need to be counted
 * @returns the count of negative numbers, 0 otherwise
 */
function countNegatives(arr: any): number {
  if (!Array.isArray(arr)) return 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isFinite(arr[i])) return 0;
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
