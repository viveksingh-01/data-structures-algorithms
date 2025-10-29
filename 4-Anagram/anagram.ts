/**
 * Checks if the strings are anagram of each other.
 * Note: the strings may contain non-alphabet characters which must be ignored.
 * @param str1 first string
 * @param str2 second string
 * @returns true if the strings are anagram, false otherwise
 */
function isAnagram(str1: string, str2: string): boolean {
  str1 = str1.toLowerCase().replace(/\^a-z/g, "").split("").sort().join("");
  str2 = str2.toLowerCase().replace(/\^a-z/g, "").split("").sort().join("");

  return str1 === str2;
}
