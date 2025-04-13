/**
Daily JavaScript Challenge: Calculate Maximum Subarray Sum
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Array

Description
Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return that sum. Implement the function without using built-in functions that directly solve the problem.
 */


export function firstContiguousSubArray (input:number[][]):number {
  
  return Math
  .max(...input
    .map((arr) => {
      return arr.length 
      ? arr.reduce((arr, cur) => {return arr+cur}) 
      : 0
    })
  ) 
}

console.log(firstContiguousSubArray([[1,2,3],[2,2,3],[6,70,60],[5,4,3],[1,4,2]]))
