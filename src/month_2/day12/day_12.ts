/**
 * https://dev.to/dpc/daily-javascript-challenge-js-82-capitalize-the-first-letter-of-each-word-201c
 * The Challenge
 * Difficulty: Easy
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Write a function that takes a string as input and returns the string with the first letter of each word capitalized. Words are defined as sequences of characters separated by spaces.
 */

export default function capitalizeEachWord (str:string):string {
  return str.split(' ').map((el) =>{
    let element = el[0].toUpperCase() + el.substring(1)
    return element
  }).join(' ')
}
