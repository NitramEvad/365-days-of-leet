/**
 * The Challenge: Bracket Balancing Checker 
 * Difficulty: Medium
 * 
 * Topic: Data Structures
 * 
 * Description
 * Write a function that checks if the brackets in a given string are balanced. The types of brackets are: (), {}, and []. A string is considered balanced if:
 * - Every opening bracket has a corresponding closing bracket of the same type.
 * - Opening brackets are closed in the correct order.
 */

export function bracketBalancer (str:string):boolean {

  const brackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }
  const strArr = [...str].filter((value) => 
    value in brackets || Object.values(brackets).includes(value))
  
  if (strArr.length === 0 || strArr.length % 2 !== 0) return false // early return if no brackets or uneven number

  let stack:(string)[] = [];

  for (let i = 0; i < strArr.length; i++) {
    const element = strArr[i]

    if (element in brackets) {
      stack.push(element)
    } else {
      const lastOpenElement = stack.pop();
      if (!lastOpenElement || brackets[lastOpenElement] !== element) {
        return false;
      }
    }
  }

  return stack.length ? false : true
}