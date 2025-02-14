/**
 * Valid pallindrome
 * https://alejandro-gomez.vercel.app/leetcode/two-pointers#valid-palindrome.easy
 */

export function pallindrome (str:string):boolean {
  const regex = /[^a-z0-9]/g;
  str = str.toLowerCase().replace(regex, '');

  let i = 0;
  let j = str.length-1;

  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++
    j--
  }
  return true
}