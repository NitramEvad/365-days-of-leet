/**
https://dev.to/dpc/daily-javascript-challenge-js-109-convert-snake-case-to-camel-case-5ab6
Daily JavaScript Challenge: Convert Snake Case to Camel Case
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Easy

Topic: String Manipulation

Description
Write a function that converts a given snake_case string to CamelCase string format. Snake case strings consist of words separated by underscores ('_'). Camel case strings are concatenated and start each new word with an uppercase letter (except the first word unless it starts with an uppercase letter).
 */

export function snakeCase (input:string):any {
  return input
    .split("_")
    .map(word => word && word[0].toUpperCase() + word.slice(1))
    .join(" ")
}

console.log(snakeCase('abc__defg_higc'))