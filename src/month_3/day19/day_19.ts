/**
 * https://dev.to/dpc/daily-javascript-challenge-js-87-binary-gap-length-5o7
 * 
 * Daily JavaScript Challenge: Binary Gap Length
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Bit Manipulation
 * 
 * Description
 * Write a function that takes an integer and returns the length of the longest sequence of consecutive zeros ("gaps") that are surrounded by ones in the binary representation of the given number. The function should return 0 if there are no gaps.
 */

export function bitGap (input: string | number):number {

  const numConverted = typeof input === "number" ? input.toString(2) : input;

  let largest = 0;
  let current = 0;

  for (let i = numConverted.indexOf('1'); i < numConverted.lastIndexOf('1'); i++) {
    if (numConverted[i] === '0') {
      current +=1
      if (current > largest) largest = current
    } else {
      current = 0;
    }
  }

  return largest
}
