/**
https://dev.to/dpc/daily-javascript-challenge-js-112-compute-longest-increasing-subsequence-2okn
Daily JavaScript Challenge: Compute Longest Increasing Subsequence
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Arrays

Description
Given an array of integers, determine the length of the longest increasing subsequence in the array.
 */

export function incrSubSeq (input:number[]):number {
  
  let lower = input[0];
  let upper = 0;
  let largestSpread = 0;
  
  input.reduce((acc:number, cur:number) => {
    if (cur < acc) lower = cur
    upper = cur

    if (upper - lower > largestSpread) largestSpread = upper - lower
    return cur
  })
  return largestSpread
}

