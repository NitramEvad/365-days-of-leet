/**
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Matrix Manipulation
 * 
 * Description
 * Write a function that calculates the sum of all the elements on the main diagonal of a square matrix. The matrix will be provided as 2D array of numbers where each sub-array represents a row of the matrix.
 */

export function diagonalSum (matrix:number[][]):number {

  let total = 0;

  for (let i = 0; i < matrix.length; i++) {
    total += matrix[i][i]
  }
  
  return total
}