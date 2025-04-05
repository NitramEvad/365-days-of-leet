/**
 * Daily JavaScript Challenge: Compute Spiral Order Traversal of a Matrix

The Challenge
Difficulty: Medium

Topic: Matrix Traversal

Description
Given a 2D matrix, write a function that returns all elements of the matrix in spiral order (clockwise direction).

 */

type SpiralType = (string | number)[]

export function spiral (input:SpiralType[]):SpiralType {

  const output: SpiralType = [];
  const length = input.length;

  let left = 0;
  let top = 0;
  let bottom = length - 1;
  let right = length - 1;

  while (top <= bottom && left <= right) {
    // right->
    for (let i = left; i <= right; i++) {
      output.push(input[top][i])
    }
    top++

    // down->
    for (let i = top; i <= bottom; i++) {
      output.push(input[i][right])
    }
    right--

    // left <-
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        output.push(input[bottom][i])
      }
      bottom--
    }

    //  up <-
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        output.push(input[i][left])
      }
      left++
    }
  }

  return output
}

console.log(spiral([
  [1,2,3,4],
  [12,13,14,5],
  [11,16,15,6],
  [10,9,8,7]
]))
