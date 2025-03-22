/**
 * https://dev.to/dpc/daily-javascript-challenge-js-90-generate-collatz-sequence-872
 * The Challenge - Generate Collatz Sequence
 * Difficulty: Medium
 * 
 * Topic: Collatz Sequence
 * 
 * Description
 * Write a function that generates the Collatz sequence for a given positive integer. The Collatz sequence is defined as follows: Starting with any positive integer n, the next term in the sequence is obtained by applying the following rules:
 * 
 * If n is even, divide it by 2.
 * If n is odd, multiply it by 3 and add 1. The sequence ends when it reaches the number 1.
 *
 * */

export function collatzSeq (num:number):number[] {

  let result:number[] = []

  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num = (num * 3) + 1 
    }
    result.push(num)
  }

  return result
}
