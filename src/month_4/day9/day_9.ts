/**
https://dev.to/dpc/daily-javascript-challenge-js-108-calculate-factorial-with-tail-recursion-57jd
Daily JavaScript Challenge: Calculate Factorial with Tail Recursion
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Recursion

Description
Implement a function that calculates the factorial of a given positive integer using tail recursion. A factorial of a number n is the product of all positive integers less than or equal to n. The challenge is to implement this using a tail recursive approach.
 */

export function factorial (input:number, total:number = 1):number {
  if (input === 0) return total

  return factorial(input-1, total * input)
}

factorial(5)