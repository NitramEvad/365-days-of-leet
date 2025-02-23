/**
 * https://dev.to/dpc/daily-javascript-challenge-js-60-find-the-first-non-consecutive-number-470m
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Create a function that takes an array of integers as an input and returns the first element in the array that is not consecutive. By consecutive, we mean that the number following one element should be exactly 1 greater than the current element. If the entire array is made up of consecutive numbers, return null.
 */

export function firstConsecutive (arr:number[]):number|null {

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i+1] - arr[i] !== 1) return arr[i+1]
  }

  return null
}