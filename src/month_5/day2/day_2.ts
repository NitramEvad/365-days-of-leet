/**
The Challenge
Difficulty: Medium

Topic: Number Theory

Description
Write a function that calculates the sum of all prime numbers less than or equal to a given number n. The function should return the sum as an integer. Prime numbers are numbers greater than 1 that have no divisors other than 1 and themselves.
 */


export function primeAgen (input: number):number  {

// 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
  let sum = 0

  for (let i = 2; i <= input; i++) {
    let isPrime:boolean = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      sum += i
    }
  }

  return sum
}
