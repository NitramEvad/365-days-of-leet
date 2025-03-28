/**
 * https://dev.to/dpc/daily-javascript-challenge-js-95-calculate-the-product-of-non-zero-elements-4fjh
 * Daily JavaScript Challenge: Calculate the Product of Non-Zero Elements
 * Difficulty: Easy
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an array of integers, write a function to calculate the product of all non-zero elements in the array. If no non-zero element exists, return 1.
 */

export function nonZeroProduct (arr:number[]):number {
  return arr.reduce((acc,cur) => {
    return acc * (cur !== 0 ? cur : 1)
  },1)
}