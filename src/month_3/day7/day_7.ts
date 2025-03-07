/**
 * The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Given a string, determine if any permutation of the string is a palindrome. A palindrome is a word that reads the same backward as forward.
 */

export function isPalindrome (str:string):boolean {

  let palindrome = true;
  let shift = 0;
  const filteredStr = str.toLowerCase().replace(/ /g, '')
  const length = filteredStr.length-1; 

  while (palindrome && shift <= length/2) {
    palindrome = filteredStr[shift] === filteredStr[length-shift]
    shift++
  }

  return palindrome
}

console.log(isPalindrome('theeht'))
console.log(isPalindrome('theht'))
console.log(isPalindrome('xtneht'))
console.log(isPalindrome('x Ten etX'))