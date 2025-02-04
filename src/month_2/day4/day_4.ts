/**
 * https://dev.to/dpc/daily-javascript-challenge-js-44-convert-roman-numerals-to-integer-3nlk
 * 
 * The Challenge
 * Difficulty: Medium
 *
 * Topic: Number Conversion
 *
 * Description
 * Create a function that takes a string representing a Roman
 * numeral and converts it into an integer. The function should 
 * handle the Roman numerals from 1 to 3999.
 */
const numerals = {
  'I': 1,
  'V': 5,
  'L': 50,
  'X': 10,
  'C': 100,
  'D': 500,
  'M': 1000,
}

export default function romansToInteger(str:string):number {

  let result = 0;
  let previousValue = 0;

  for (let i = str.length-1; i>= 0; i-- ) {
    
    let currentValue = numerals[str[i].toUpperCase() as keyof typeof numerals];

    currentValue >= previousValue 
    ? result += currentValue 
    : result -= currentValue
    
    previousValue = currentValue
  }
  return result
}
