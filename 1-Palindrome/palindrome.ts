/**
 * Checks if the number is Palindrome
 * @param n number to be checked for Palindrome
 * @returns true if the number is a Palindrome, false otherwise
 */
function checkPalindrome(n: number): boolean {
  const num = Math.abs(n);

  if (num == 0) return true;

  const reversedNumber = getReversedNumber(num);
  if (reversedNumber == num) {
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
