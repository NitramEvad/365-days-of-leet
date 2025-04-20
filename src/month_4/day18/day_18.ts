/**
 * The Challenge
Difficulty: Easy

Topic: String manipulation

Description
Given a non-empty string, write a JavaScript function to find and return the middle character(s) of the string. If the length of the string is odd, return the middle character. If the length is even, return the two middle characters.
 */

export function middleOfString (str:string):string {
  const middle = str.length/2

  return str.length % 2 === 0 
  ? str.charAt(middle-1) + str.charAt(middle) 
  : str.charAt(middle)
}
