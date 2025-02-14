/**
 * Valid pallindrome
 * https://alejandro-gomez.vercel.app/leetcode/two-pointers#valid-palindrome.easy
 */

export function pallindrome (str:string):boolean {
  const regex = /[a-z0-9]/g;
  const cleanStr = str.toLowerCase().split('').filter((el) => el.match(regex));
  const reversedStr  = [...cleanStr].reverse()

  let isPallindrome = true;
  let index = 0;

  while (isPallindrome === true && index < cleanStr.length/2) {
    if (cleanStr[index] !== reversedStr[index]) isPallindrome = false
    index++
  }
  return isPallindrome
}


