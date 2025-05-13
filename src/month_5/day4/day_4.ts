/**
The Challenge
Difficulty: Medium

Topic: Number Theory

Description
Implement a function to determine if a number is a happy number. A happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.
 */


export function happyNumber (input: number):boolean  {

  let processed = input;
  let tried:Set<number> = new Set();

  while (processed !== 1 && processed !== 0) {
    if (tried.has(processed)) return false;

    tried.add(processed)

    processed = processed
      .toString() // '234'
      .split('') // ['2', '3', '4']
      .map(el => Number(el) * Number(el)) // [4, 9, 16]
      .reduce((acc, cur) => acc+cur,0)
  }
  
  return true
}
