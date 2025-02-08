/**
 * https://dev.to/dpc/daily-javascript-challenge-js-48-count-occurrences-of-each-word-in-a-string-2g80
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Manipulation
 * Description
 * Create a function that takes a string input and counts the occurrences of each word in
 * the string. Return an object where the keys are the words and the values are the counts.
 * 
 */

type Result = {[key: string]: number}

export function wordCount (str:string):Result {
  const resultObj: Result = {};

  str.split(' ').forEach((el) => {
    resultObj[el] ? resultObj[el] += 1 : resultObj[el] = 1;
  })

  return resultObj
}
