/**
 * https://dev.to/dpc/daily-javascript-challenge-js-47-evaluate-mathematical-expressions-25ni
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: String Parsing
 * 
 * Description
 * Write a function to evaluate a simple mathematical expression
 * string consisting of non-negative integers and the operations
 * +, -, *, and / (integer division). The function should return
 * the result as an integer.
 * 
 */

export function strParse (str:string):number {

  const operators = ['/','*','+','-']
  const parsedArr: (string|number)[] = []

  let prevEl:string = ''
  str.split('').forEach((el,idx) => {
    if (operators.includes(el)) {
      parsedArr.push(+prevEl)
      parsedArr.push(el)
      prevEl = ''
    } else {
      prevEl += el
      idx === str.length-1 && parsedArr.push(+prevEl)
    }
  })

  let total = +parsedArr[0];

  let index = 0;
  while (index < parsedArr.length) {
    console.log(total)
      if (parsedArr[index+1] === '+') total += +parsedArr[index+2]
      if (parsedArr[index+1] === '-') total -= +parsedArr[index+2]
      if (parsedArr[index+1] === '*') total *= +parsedArr[index+2]
      if (parsedArr[index+1] === '/') total /= +parsedArr[index+2]
    index+=2
  }

  return total
}

strParse('15+16-4*3/20')