/**
 * Daily JavaScript Challenge: Pair Swap In an Array
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Easy

Topic: Array Manipulation

Description
Given an array of integers, you need to swap every two consecutive elements. If the array has an odd number of elements, the last one remains in its position.
 */

export function swapEverySecond (input:number[]):number[] {

  const result:number[] = [];

  for (let i = 0; i < input.length; i += 2) {
    if (input[i+1] !== undefined) result.push(input[i+1])
    result.push(input[i])
  }

  return result
}

