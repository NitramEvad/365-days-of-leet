/**
 * https://dev.to/dpc/daily-javascript-challenge-js-85-sum-of-digits-until-single-digit-2n99
 * Daily JavaScript Challenge: Sum of Digits Until Single Digit
 * The Challenge
 * Difficulty: Medium
 *
 * Topic: Number Manipulation
 *
 * Description
 * Given a non-negative integer, repeatedly sum all its digits until the result is a single digit.
 */


export function sumOfDoubleDigits (num:number):number {

  let current = num;

  while (current >= 10) {
    let numArr = current
      .toString()
      .split('')
      .map(Number)

    current = numArr.reduce((acc, cur) => acc + cur)
  }
  return current
}
