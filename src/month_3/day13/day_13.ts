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

  if (!arr.every(el => el === 0 || el === 1)) {
    throw new Error("Input array must contain only binary values (0 or 1).")
  }

  let longest = 0;
  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] === 1 ? current++ : current = 0;
    if (current > longest) longest = current
  }
  return longest
}

console.log(consecutiveOnes([0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0]))
console.log(consecutiveOnes([0,1,0,0,0,1]))