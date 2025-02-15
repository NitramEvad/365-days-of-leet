/**
 * https://dev.to/dpc/daily-javascript-challenge-js-48-count-occurrences-of-each-word-in-a-string-2g80
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Create a function that takes a string input and counts the
 * occurrences of each word in the string. Return an object where
 * the keys are the words and the values are the counts.
 *  
 */

export function wordCount (str:string):Record<string, number> {
  const counter: Record<string, number> = {}

  str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .forEach((word) => counter[word] = (counter[word] || 0) +1
    )

  return counter
}
