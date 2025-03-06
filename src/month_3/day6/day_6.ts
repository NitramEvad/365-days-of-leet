/**
The Challenge
Difficulty: Medium

Topic: Conversion

Description
Write a function that converts a given string representing a hexadecimal number into its binary representation.
 */

export function hexToBinary (str:string):string {
  return parseInt(str, 16).toString(2)
}
