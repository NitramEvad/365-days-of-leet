/**
The Challenge
Difficulty: Medium

Topic: Fibonacci Sequence

Description
Write a JavaScript function that generates the Fibonacci sequence up to a given number of terms, N. The Fibonacci sequence starts with 0 and 1, and each subsequent term is the sum of the two preceding terms. The sequence begins as: 0, 1, 1, 2, 3, 5, 8, ... Your task is to write a function that takes an integer N and returns an array containing the first N terms of the Fibonacci sequence.
 */

export function fib (num:number):number {
  return num <= 1 ? 1 : num * fib(num-1)
}
