/**
 * Daily JavaScript Challenge: Merge Overlapping Intervals
 * https://dev.to/dpc/daily-javascript-challenge-js-83-merge-overlapping-intervals-30hp
 * Difficulty: Medium
 * 
 * Topic: Array Manipulation
 * 
 * Description
 * Given an array of intervals where each interval is represented by a pair of numbers [start, end], merge all overlapping intervals and return an array of the non-overlapping intervals sorted by their start position. Each interval is closed, meaning [start, end] includes both start and end.
 */


export function removeOverlaps (arr: number[][]):number[][] {

  let slimmedArr:number[][] = [];
  let current:number[] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    console.log('\nX', current, arr[i])
    if (current[1] < arr[i][0]) { 
      slimmedArr.push(arr[i])
      console.log('CL1:', current, slimmedArr)
    } else {
      current = [current[0], arr[i][1]]
      console.log('CL2:', current, slimmedArr)
    }
  }

  return slimmedArr
}

console.log(removeOverlaps([[1,3],[4,7],[8,9]]))
console.log(removeOverlaps([[1,4],[3,7],[8,9],[11,15],[12,17],[11,19],[30,40]]))