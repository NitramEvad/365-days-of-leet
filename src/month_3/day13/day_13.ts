/**
 * 
 * https://dev.to/dpc/daily-javascript-challenge-js-81-find-the-longest-consecutive-sequence-of-ones-i08
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given a binary array, write a function that returns the length of the longest consecutive sequence of 1's in the array.
 *  
 **/

type Binary = 0 | 1
type ElementArr = number[] 

export function consecutiveOnes (arr:ElementArr):number {

  let longest = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 1 ? current++ : current = 0;
    if (current > longest) longest = current
  }
  return longest
}

