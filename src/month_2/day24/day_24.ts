/**
 * https://dev.to/dpc/daily-javascript-challenge-js-61-next-greater-element-in-circular-array-2122
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Arrays
 * 
 * Description
 * Given a circular array of integers, find the next greater element for each element. The next greater element is the first element greater than the current one that appears in circular traversal of the array. If it doesn't exist, return -1 for that element.
 */

export function circularTraversal (arr:number[]):number[] {

  let stack:number[] = [];

  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i])
    let nextIndex = i;
    
    do {
      nextIndex = nextIndex + 1 === arr.length ? 0 : nextIndex + 1;
    } while (nextIndex !== i && arr[nextIndex] <= stack[i])

    if (arr[nextIndex] > stack[i]) {
      stack.pop()
      stack.push(arr[nextIndex])
    } else if (nextIndex === i) {
      stack.pop()
      stack.push(-1)
    }
  }

  return stack
}
