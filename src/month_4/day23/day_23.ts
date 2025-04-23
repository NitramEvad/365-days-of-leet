/**
 * The Challenge
Difficulty: Easy

Topic: String Manipulation

Description
Create a function that counts the number of vowels in a given string. Vowels include 'a', 'e', 'i', 'o', 'u', both uppercase and lowercase. The function should return the total count of vowels in the string.
 */

export function vowelCount (input:string):number {

  let vowels = ['a','e','i','o','u',]

  return [...input].reduce((acc, cur) => {
    return vowels.includes(cur.toLowerCase()) ? acc += 1 : acc;
  },0)
}