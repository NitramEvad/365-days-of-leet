/**
 * https://dev.to/dpc/daily-javascript-challenge-js-97-longest-unique-substring-1n6k
 * 
 * Daily JavaScript Challenge: Longest Unique Substring
 * Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Given a string, find the length of the longest substring without repeating characters.
 */

export function longestNonRepeater (input:string):number {

  let current = ''
  let longest = ''

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i+1]) {
      current += input[i]
    } else {
      if (current.length > longest.length) {
        longest = current;
      }
      current = '';
    }
  }

  if (current.length > longest.length || !longest) longest = current

  return longest.length
}

