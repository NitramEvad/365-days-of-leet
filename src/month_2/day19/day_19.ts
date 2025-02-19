/**
 * https://dev.to/dpc/daily-javascript-challenge-js-55-calculate-pascals-triangle-row-3o31
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Algorithmic Problem
 * 
 * Description
 * Given an integer n, write a function that returns the nth row of Pascal's Triangle. Pascal's Triangle is a triangular array of numbers, such that every number is the sum of the two numbers directly above it in the previous row. The 0th row is [1].
 */

export function pascale (num: number):number[] {
  let result:number[] = [1]
  if (num === 1) return result

  for (let i = 0; i < num; i++) {
    result.push(Math.floor(result[i]*((num - i) / (i+1))))
  }

  return result
}

