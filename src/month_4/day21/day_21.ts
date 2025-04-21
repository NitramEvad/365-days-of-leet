/**
The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Write a function that accepts an array of integers and returns the maximum difference between any two consecutive elements in the array. If the array has less than two elements, return 0.
 */

export function maxDiff (input:number[]):number {

  if (input.length < 2) return 0;
  
  let min = input[0], max = input[0];

  input.forEach(el => {
    if (el > max) max = el;
    if (el < min) min = el;
  })

  return max-min
}
