/**
 * The Challenge
Difficulty: Easy

Topic: Matrix Manipulation

Description
Create a function that takes a square matrix (2D array) as input and returns the sum of the numbers in the matrix's main diagonal. The main diagonal of a matrix consists of the elements starting from the top left corner to the bottom right corner.
 */

export function matrixDiagonal (matrix: number[][]):number {

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i]
  } 

  return sum
}