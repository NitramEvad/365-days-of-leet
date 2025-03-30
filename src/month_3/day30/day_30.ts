/**
 * https://dev.to/dpc/daily-javascript-challenge-js-98-find-the-second-largest-number-in-an-array-5b4a
 * 
 * Find the Second Largest Number in an Array
 * Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Write a JavaScript function that takes an array of numbers and returns the second largest number in the array. If the array has less than two distinct numbers, return null.
 */

export function secondLargest (input:number[]):number {

  let largest = input[0] > input[1] ? input[0] : input[1] 
  let secondLargest = input[0] < input[1] ? input[0] : input[1]

  input.forEach((el) => {
    if (el > largest) {
      secondLargest = largest
      largest = el
    } else if (el > secondLargest && el < largest) {
      secondLargest = el
    }
  })
  
  return secondLargest
}

