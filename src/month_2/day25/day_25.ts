/**
 * https://dev.to/dpc/daily-javascript-challenge-js-62-calculate-the-n-th-fibonacci-number-efficiently-467o
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Dynamic Programming
 * 
 * Description
 * Write a function to calculate the N-th Fibonacci number. The Fibonacci sequence is defined as follows: ( F(0) = 0 ), ( F(1) = 1 ), and ( F(n) = F(n-1) + F(n-2) ) for ( n > 1 ). The function should efficiently compute the Fibonacci numbers for large N (e.g., N = 50).
 */

export function fib (n:number):number {
    if (n === 0) return 0
    if (n < 3) return 1
    return (fib(n-2)+fib(n-1))
}

console.log(fib(4))