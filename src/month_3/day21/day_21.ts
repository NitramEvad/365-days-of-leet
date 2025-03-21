/**
 * 
 * https://dev.to/dpc/daily-javascript-challenge-js-89-convert-decimal-number-to-roman-numerals-422p
 * 
 * Daily JavaScript Challenge: Convert Decimal Number to Roman Numerals
 * 
 * Difficulty: Medium
 * 
 * Topic: Number Manipulation
 * 
 * Description
 * Write a function that converts a given positive integer (less than 4000) to a Roman numeral. Each character of the output Roman numeral string should be in uppercase and follow standard Roman numeral conventions.
 */

export function decimalToRoman (num:number):string {

  const romans = [
    { value: 1000, symbol: 'M'},
    { value: 900, symbol: 'CM'},
    { value: 500, symbol: 'D'},
    { value: 400, symbol: 'CD'},
    { value: 100, symbol: 'C'},
    { value: 90, symbol: 'XC'},
    { value: 50, symbol: 'L'},
    { value: 40, symbol: 'XL'},
    { value: 10, symbol: 'X'},
    { value: 9, symbol: 'IX'},
    { value: 5, symbol: 'V'},
    { value: 4, symbol: 'IV'},
    { value: 1, symbol: 'I'},
  ]

  let result = ''

  for (const {value, symbol} of romans) {
    while (num >= value) {
      num -= value;
      result += symbol
    }
  }

  return result
}

console.log(decimalToRoman(1994))