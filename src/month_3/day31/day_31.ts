/**
 * https://dev.to/dpc/daily-javascript-challenge-js-96-sum-digit-sequence-3jm7
 * 
 * Daily JavaScript Challenge: Sum Digit Sequence
 * 
 * The Challenge
 * Difficulty: Easy
 * 
 * Topic: Array manipulation
 * 
 * Description
 * Given an array of numbers, calculate the sum of digits for each number and return a new array containing these sums in the same order.
 */

export function sumDigitSeq (input:number[]):number[] {
  let output:number[] = [];

  input.reduce((acc, cur) => {
    output.push(acc+cur)
    return acc+cur
  })

  return output
}
