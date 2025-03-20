/**
 * https://dev.to/dpc/daily-javascript-challenge-js-88-calculate-the-sum-of-all-prime-numbers-less-than-n-228e
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Algorithm
 * 
 * Description
 * Write a function that takes an integer N as input and returns the sum of all prime numbers that are less than N.
 * 
  */

export function primeAdd (num:number):number {
  
  let result = 0 

  if (num <= 1) return result;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) result += i
    console.log(i, result)
  }

  function isPrime (check: number): boolean {
    if (check === 2) return true;
    if (check % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(check); i += 2) {
      if (check % i === 0) return false;
    }
    return true;
  }

  return result
}

primeAdd(5)