// And old one but one to practice now and then - factorial finder.
// I worked on the assumption the answer must always be 1 or more, and 
// a zero result is not expected

// BASIC FACTORIAL 1
export function factorial (num:number):number {
  let i = 1
  let total = 1

  while (i < num) {
    i++
    total = total * i
  }

  return total
}

// BASIC FACTORIAL 2
export function findFactorial (num: number): number {
  if (num <= 1) return 1;
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i
  }

  return factorial
}


// RECURSIVE FACTORIAL
export function recursiveFactorial(num: number):number {

if (num<=1) return 1
  return num * recursiveFactorial(num-1)
}


console.log('fact', factorial(10))
console.log('fact', factorial(0))
console.log('fact', factorial(2))
console.log('find', findFactorial(10))
console.log('find', findFactorial(0))
console.log('find', findFactorial(2))
console.log('recursive', recursiveFactorial(10))
console.log('recursive', recursiveFactorial(0))
console.log('recursive', recursiveFactorial(2))






































export const recursivefindFactorial = (num: number): number => {
  if (num <=1) return 1;
  return num * recursivefindFactorial(num -1)
}

console.log(findFactorial(7))
console.log(recursivefindFactorial(7))
