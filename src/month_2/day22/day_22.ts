/**
 * https://dev.to/dpc/daily-javascript-challenge-js-59-find-the-smallest-positive-number-missing-in-an-array-4k3m
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Arrays
 * 
 * Description
 * Given an unsorted array of integers, find the smallest positive integer that does not appear in the array. Ignore negative numbers and zero, and optimize for time and space complexity.
 */

export function smallestInt (arr:number[]):number {

  let smallest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 1) return 0 // early return
    if (arr[i] < smallest && arr[i] > 0) smallest = arr[i]
  }
  
  return smallest-1
}
