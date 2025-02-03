/**
 * https://dev.to/dpc/daily-javascript-challenge-js-42-check-array-for-arithmetic-progression-26b1
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an array of numbers, write a function that determines if the array can be 
 * rearranged into an arithmetic progression. An arithmetic progression is a sequence of 
 * numbers such that the difference between consecutive terms is constant.
 *
 */

export function progressionCheck (arr:number[]):boolean {

  if (arr.length === 0) return true;
  let result = true

  arr.sort((a,b) => a - b);
  
  const interval = arr[1] - arr[0];

  
  arr.reduce((acc:number, cur:number) => {
    if (cur-acc !== interval) result = false
    return acc = cur  
  })

  return result
}

console.log(progressionCheck([1,2,3,4,5]))