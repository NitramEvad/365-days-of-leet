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

export function progressionCheckv2 (arr:number[]):boolean {
  if (!arr.length) return true
  arr.sort((a,b) => a - b);
  const interval = arr[1] - arr[0]

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i+1] - arr[i] !== interval) return false
  }

  return true
}
