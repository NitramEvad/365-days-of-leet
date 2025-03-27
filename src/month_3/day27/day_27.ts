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

  const bracketsList = ['(','{','[', ')','}',']',]

  const brackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }

  let stack:(string|undefined)[] = [];

  const strArr = [...str].filter((value) => bracketsList.includes(value))

  strArr.forEach((el) => {
    if (brackets[el]) {
      stack.push(el)
      console.log(el, brackets[el], stack)
    } else {
      let key:any = stack.pop
      console.log(el, brackets[el], stack, brackets[key])
      if (brackets[key] === el)
        console.log('TRUE')
    }
    
  })
  console.log(strArr)

  return true
}

console.log(bracketBalancer('sfsfd(sf[dfd]sd)sdf{sdfsf}fs[df]fdsd'))