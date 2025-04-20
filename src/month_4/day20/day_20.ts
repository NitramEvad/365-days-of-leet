/**
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Write a function removeConsecutiveDuplicates that takes a string as input and returns a new string with all groups of consecutive duplicate characters replaced by a single character.
 */

export function removeConsecutiveDuplicates (input:string):string {
  return [...input].reduce((acc,cur) => acc.endsWith(cur) ? acc : acc+cur)
}
