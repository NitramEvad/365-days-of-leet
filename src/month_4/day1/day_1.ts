/**
 * Daily JavaScript Challenge: Find Smallest Missing Positive Integer
Difficulty: Medium

Topic: Array Manipulation

Description
Write a function that finds the smallest positive integer that is missing from an unsorted array of integers. Your function should run with an expected time complexity of O(n).

 */

export function smallestInt (arr: number[]): number {
  
  let smallest = arr[0]
  
  arr.forEach((el) => {
    if (el < smallest && el >= 0) smallest = el;
  })

  return smallest
}
