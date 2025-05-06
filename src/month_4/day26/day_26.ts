/**
The Challenge
Difficulty: Medium

Topic: String Manipulation

Description
Write a JavaScript function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 */


export function longestCommonPrefix (input: string[]):any  {

  let prefix: string[] = []

  // iterate letters
  for (let i = 0; i < input[0].length; i++) {
    prefix.push(input[0][i])

      // iterate elements of array
    for (let j = 0; j < input.length; j++) {
      if (input[j][i] !== prefix[i]) {
        prefix.pop()
        return prefix.join('')
      }
    }
  }

  return prefix.join('')

}

console.log(longestCommonPrefix(['cbcaxyz', 'xcb123', 'cbcdnpo', 'cbcdeabbba']))
