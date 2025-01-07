/*
Day 7
https://www.codewars.com/kata/5266876b8f4bf2da9b000362/typescript

A 6th kyu challenge

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

export const likes = (arr : string[]) : string => {

    let output = '';

    switch (arr.length) {
        case 0: 
            output = 'no one';
            break;
        case 1: 
            output = `${arr[0]}`;
            break;
        case 2: 
            output = `${arr[0]} and ${arr[1]}`
            break;
        case 3: 
            output = `${arr[0]}, ${arr[1]} and ${arr[2]}`
            break;
        default: 
            output = `${arr[0]}, ${arr[1]} and ${arr.length-2} others`
    }
    
    return `${output} ${arr.length > 1 ? 'like' : 'likes' } this`
}
