/**
 * Checks if the number is Palindrome
 * @param n number to be checked for Palindrome
 * @returns true if the number is a Palindrome, false otherwise
 */
function checkPalindrome(n: number): boolean {
  const reversedNumber = getReversedNumber(n);
  if (reversedNumber == n) {
    return true;
  }
  return false;
}

/**
 * Reverses the digits of the given number.
 * @param n number for which the digits have to be reversed
 * @returns number with reversed digits of the original number
 */
function getReversedNumber(n: number): number {
  let r;
  let reversedNumber = 1;
  while (n > 0) {
    r = n % 10;
    reversedNumber = reversedNumber * 10 + r;
    n = Math.floor(n / 10);
  }
  return reversedNumber;
}
