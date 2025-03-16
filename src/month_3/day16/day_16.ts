/**
 * https://dev.to/dpc/daily-javascript-challenge-js-84-find-the-first-repeated-character-in-a-string-28d7
 * Daily JavaScript Challenge: Find the First Repeated Character in a String
 * Difficulty: Easy
 *
 * Topic: String Manipulation
 *
 * Description
 * Given a string, find and return the first character that repeats. If there is no such character, return null.
 * 
*/

export function firstRepeater (str:string):string|null {

  for (let i = 0; i < str.length-1; i++) {
    if (str[i] === str[i+1]) return str[i]
  }
  return null

}