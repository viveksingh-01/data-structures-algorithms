/**
 * Finds the second-largest number from the string containing the digits.
 * @param s string containing the digits
 * @returns second-largest number if present, -1 otherwise
 */
function secondHighest(s: string): number {
  const onlyNumbersString = s.replace(/[a-zA-Z]/g, "");
  const numberList = Array.from(new Set(onlyNumbersString.split("").map(Number)));
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (const num of numberList) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && secondLargest > largest) {
      secondLargest = num;
    }
  }
  if (secondLargest > -Infinity) {
    return secondLargest;
  }
  return -1;
}

/**
 * Finds the second-largest number using sort, from the string containing the digits.
 * @param s string containing the digits
 * @returns second-largest number if present, -1 otherwise
 */
function secondHighestUsingSort(s: string): number {
  const onlyNumbersString = s.replace(/[a-zA-Z]/g, "");
  const numberList = Array.from(new Set(onlyNumbersString.split("").map(Number))).sort();
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (const num of numberList) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    }
  }
  if (secondLargest > -Infinity) {
    return secondLargest;
  }
  return -1;
}
