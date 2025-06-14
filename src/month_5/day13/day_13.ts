/**
 * The Challenge
Difficulty: Easy

Topic: Array Manipulation

Description
Write a function that takes an array of integers and returns the sum of all even numbers in the array. If the array contains no even numbers, the function should return 0.
 */

export function arrEvensSum (arr:number[]):number {
  return arr.reduce((acc, cur) => {
    return cur % 2 === 0 ? acc + cur : acc;
  }, 0)
}
