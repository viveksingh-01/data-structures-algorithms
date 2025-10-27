/**
 * Reverses the integer
 * @param x integer to be reversed, a negative number has to be handled accordingly
 * @returns the reversed integer; 0 in case the reversed number falls out of the range: -2^31 to 2^31 - 1
 */
function reverse(x: number): number {
  let num = Math.abs(x);
  let rev = 0;
  while (num > 0) {
    const rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  const limit = Math.pow(2, 31);
  if (rev < -limit || rev >= limit) {
    return 0;
  }
  return x < 0 ? -rev : rev;
}
