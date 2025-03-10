/**
 * Daily JavaScript Challenge #JS-77: Rotate a Matrix Clockwise
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Matrix Manipulation
 * 
 * Description
 * Given a square matrix, rotate it 90 degrees clockwise. Write a function that takes a square matrix of * N x N dimensions and returns the rotated matrix.
 */

export function rotateMatrix(matrix:number[][]):number[][] {

  const N = matrix.length;
  let rotatedArr = Array.from({ length: N }, () => Array(N).fill(''));

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      rotatedArr[x][N-1-y] = matrix[y][x]
    }
  }
  return rotatedArr
}

