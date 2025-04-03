/**
 * Daily JavaScript Challenge: Find Smallest Missing Positive Integer
Difficulty: Medium

Topic: Array Manipulation

Description
Write a function that finds the smallest positive integer that is missing from an unsorted array of integers. Your function should run with an expected time complexity of O(n).

 */

export function smallestInt (arr: number[]): number {
  
  let present:number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) present[arr[i]] = arr[i]
  }

  for (let i = 0; i < present.length; i++) {
    if (present[i] === undefined) return i
  }

  return 0
}