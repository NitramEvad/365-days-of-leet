/**
 * Day 11, https://dev.to/dpc/daily-javascript-challenge-js-53-reverse-words-in-a-sentence-c3j
 * 
 * The Challenge
 * Difficulty: Medium
 * Topic: String Manipulation
 * Description
 * Given a sentence string, write a function to reverse the order of the words. Words are separated by spaces. The output should be a new string with the words in reversed order, but the original word order maintained.
 */

export function wordReverser (str:string):string {
  const reversedStr = str.split(' ').reverse().join(' ')
  return reversedStr
}
