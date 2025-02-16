/**
 * https://dev.to/dpc/daily-javascript-challenge-js-41-remove-consecutive-duplicates-in-a-string-1ddd
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Write a function that takes a string as input and returns a new string with all consecutive duplicate characters removed. The order of the characters should be preserved except for consecutive duplicates, which should be reduced to a single character.
 */

export function removeDuplicates (str:string):string {
  if (str.length === 0) return '';
  let result = str[0];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i+1]) {
      result += str[i]
    }
  }
  
  return result
}

console.log(removeDuplicates('davidwill be innn thhhhhheeeee'))