/**
Daily JavaScript Challenge: Calculate Maximum Subarray Sum
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Array

Description
Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return that sum. Implement the function without using built-in functions that directly solve the problem.
 */


export function firstContiguousSubArray (input:number[]):number {

  let currentSum = input[0];
  let maxSum = input[0];

  for (let i = 1; i < input.length; i++) {
    currentSum = Math.max(input[i], currentSum + input[i])
    maxSum = Math.max(maxSum, currentSum)
    console.log(currentSum, maxSum)
  }
  return maxSum
}


