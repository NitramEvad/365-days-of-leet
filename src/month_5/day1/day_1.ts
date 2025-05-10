/**
The Challenge
Difficulty: Easy

Topic: Strings

Description
Create a function that counts the number of unique characters in a given string. The function should be case-sensitive, meaning that 'a' and 'A' are considered different characters.
 */


export function uniqueCount1 (input: string):number  {

  let unique:string[] = []

  input
    .split('')
    .forEach(el => !unique.includes(el) && unique.push(el))

  return unique.length
}

export function uniqueCount2 (input: string):number  {
  return new Set(input).size
}
