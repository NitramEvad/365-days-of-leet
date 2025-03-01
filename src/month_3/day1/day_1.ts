/**
 * https://dev.to/dpc/daily-javascript-challenge-js-71-vowel-counter-504o
 * 
 * The Challenge
 * 
 * Difficulty: Easy
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Write a function that counts the number of vowels in a given string. Remember, the vowels are 'a', 'e', 'i', 'o', and 'u'. The function should be case-insensitive and count both uppercase and lowercase vowels.
 */

export function vowelCount (str:string):any {
  
  return str.match(/[aeiouAEIOU]/g)?.length || 0
}
