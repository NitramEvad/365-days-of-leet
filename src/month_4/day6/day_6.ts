/**
 * Daily JavaScript Challenge: Check if a Number is a Happy Number

The Challenge
Difficulty: Medium

Topic: Mathematics

Description
A happy number is a number which eventually reaches 1 when replaced repeatedly by the sum of the square of its digits. If it loops endlessly in a cycle, then it is not a happy number. For example, starting with 19, the sequence is: 1² + 9² = 82, 8² + 2² = 68, 6² + 8² = 100, 1² + 0² + 0² = 1. Hence, 19 is a happy number. Implement a function to check if a given number is a happy number.

 */

import { access } from "fs";

export function happyNumber (input:number):boolean {

  const seen = new Set();

  while (input !== 1) {
    if (seen.has(input)) return false
    seen.add(input)
    
    let total = input
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + Math.pow(cur,2),0)
      
    input = total
  }

  return true
}

console.log(happyNumber(19))
console.log(happyNumber(18))
