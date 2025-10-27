/**
 * Reverses the integer
 * @param x integer to be reversed, a negative number has to be handled accordingly
 * @returns the reversed integer
 */
function reverse(x: number): number {
  let num = Math.abs(x);
  let rev = 0;
  while (num > 0) {
    const rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (x < 0) {
    return -rev;
  }
  return rev;
}
