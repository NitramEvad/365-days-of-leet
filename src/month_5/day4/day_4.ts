/**
The Challenge
Difficulty: Medium

Topic: Number Theory

Description
Implement a function to determine if a number is a happy number. A happy number is defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.
 */


export function happyNumber (input: number):boolean  {

  let processed = 0;

  while (processed !== 1) {
    processed = input
      .toString()
      .split('')
      .reduce((acc, cur) => {
        console.log(acc,cur)
        return acc + (Number(cur) * Number(cur))
      },0)

  console.log(processed)
  }
  
  return true

}

console.log(happyNumber(23)) // 2,3=4+9=13; 1,3=1+9=10; 1,0=1+0=1
