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
    if (current[1] < arr[i][0]) { 
      slimmedArr.push(current)
      i === arr.length-1 ? slimmedArr.push(arr[i]) : current = arr[i]
    } else {
      current = [current[0], arr[i][1]]
    }
  }
  return slimmedArr
}
