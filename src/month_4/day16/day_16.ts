/**
 * Daily JavaScript Challenge: Flatten a Nested Array
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Write a function that takes a multidimensional array and returns a new array with all elements flattened to a single-level array. You must preserve the order of elements from the input nested arrays.
 */

export function flattenArr (input:any[]):any[] {
  return input.flat(Infinity)
}