/**
 * Daily JavaScript Challenge: Sum of Squared Positive Integers
Difficulty: Easy

Topic: Array Manipulation

Description
Given an array of integers, you have to return the sum of squares of all positive integers present in the array. Ignore non-positive integers when calculating the sum.

 */

export function sumAllPositive (arr:number[]):number {
  return arr.reduce((acc, cur) => {
    return acc + (cur >= 0 ? cur : 0)
  },0)
}