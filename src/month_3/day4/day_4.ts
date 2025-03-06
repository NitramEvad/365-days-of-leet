/**
 * https://dev.to/dpc/daily-javascript-challenge-js-49-find-all-prime-factors-of-a-given-number-57h2
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Mathematics
 * 
 * Description
 * Write a function that receives a positive integer and returns an array containing all of its prime factors. Prime factors are the prime numbers that can be multiplied together to obtain the original number.
 */

export function primeFactors (int:number):number[] {

  let resultArr:number[] = []

  // checks if given number is a prime 
  const checkPrime = (num:number):boolean => {
    if (num < 2 || num > 3 && num % 2 === 0) return false
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }
    return true
  }

  // checks for factors
  // then calls checkPrime to confirm if it is a prime
  for (let i = 1; i <= int; i++) {
    if (int % i === 0) {
      if (checkPrime(i)) resultArr.push(i)
    }
  }

  return resultArr
}
