/**
 * The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Given a string, determine if it is in a specific zig-zag pattern. A zig-zag pattern is defined by a string that alternates between increasing and decreasing order in terms of the Unicode values of its characters. For example, given the string 'abcd', the correct zig-zag pattern would be 'abac'. Implement a function that returns true if the input string follows a zig-zag pattern.
 */

export function zigzag (input:string):boolean {
  
  function direction (first:number, second:number):string {
    return input.charCodeAt(first) > input.charCodeAt(second) ? 'zig' : 'zag'
  }

  let currentDirection = '';
  let zigZag = true

  for (let i = 0; i < input.length; i++) {
    if (direction(i, i+1) === currentDirection) {
      zigZag = false
      break
    }
  }

  return true
}

// console.log(zigzag('abcd'))
// console.log(zigzag('abac'))
// console.log(zigzag('AaBbCc'))
// console.log(zigzag('aAbBcC'))
console.log(zigzag('aaaa'))