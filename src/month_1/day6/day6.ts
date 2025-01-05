/* 
Going to try and stay a few days ahead of things in case of unforseen circumstances.  So today is Day-6, with a 6th kyu kata that looks like fun.
https://www.codewars.com/kata/5264d2b162488dc400000001

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/ 

// Approach:
// two functions, one to process the input and one to reverse when required
// split string in to array then re-combine
// use .map to create new
export function reverseWord(word: string): string {
    return word
    .split('')
    .reverse()
    .join('')
}

export function spinWords(string: string): string {
    const WORD_LENGTH = 5;
    
    return string
    .split(' ')
    .map((word) => word.length >= WORD_LENGTH ? reverseWord(word) : word )
    .join(' ')
}
