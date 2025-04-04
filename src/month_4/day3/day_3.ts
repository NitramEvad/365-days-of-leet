/**
 * Daily JavaScript Challenge: Calculate Unique Elements in a Square Matrix
Difficulty: Medium

Topic: Matrix Operations

Description
Given a square matrix, write a function that computes the number of unique elements in the matrix. A square matrix is a two-dimensional array where the number of rows is equal to the number of columns.

 */

type InputMatrix = (number | string)[][]

export function matrix (input:InputMatrix):number {

  return new Set(input.flat()).size
}
