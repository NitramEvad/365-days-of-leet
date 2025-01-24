/*
https://dev.to/dpc/validate-sudoku-board-3fo0
Day-23 challenge to catch up - a sudoku board validator

Write a function that takes a two-dimensional array representing a 9x9 Sudoku board and checks whether the board is valid. A valid Sudoku board means that each row, each column, and each of the nine 3x3 sub-boxes contain all of the digits from 1 to 9 without repetition.

*/

export function sudokuCheck (input:number[][]):boolean {

  const dummyRow = [1,2,3,4,5,6,7,8,9];
  const expectedTotal = dummyRow.reduce((acc, cur) => acc + cur)
  const length = dummyRow.length;

  // 1. Checks a given array for PASS
  const validArr = (arr:number[]):boolean => {
    const checked: number[] = [];
    arr.forEach((el) => {if (checked.indexOf(el) === -1) checked.push(el)})
    return ((length === checked.length) && (checked.reduce((acc, cur) => acc + cur) === expectedTotal));
  }

  // 2. Checks all columns in a 2D array
  const checkCols = (arr:number[][]): boolean => {
    let check = [];
    let countInvalid = 0;
    let col = 0;

    while (countInvalid === 0 && col < length) {
      check = arr.map((el) => {
        return el[col]
      })
      validArr(check) ? col++ : countInvalid++;
    }
    return countInvalid > 0 ? false : true
  }

  // 3. Checks all rows in a 2D array
  const checkRows = (arr:number[][]): boolean => {
    let countInvalid = 0;
    let row = 0;
    while (countInvalid === 0 && row < length) {
      validArr(arr[row]) ? row++ : countInvalid++;
    }
    return countInvalid > 0 ? false : true
  }

  // 4. Checks each 3x3 square in a 2D array 
  // TODO: this part needs completion
  const checkSquare = (arr:number[][]): boolean => {
    let countInvalid = 0;
    let testArr = [];
    let col = 0;
    let row = 0;
    while (countInvalid === 0 && col < length) {
      testArr.push(arr[])
      testArr.push()
      testArr.push()
      testArr.push()
      testArr.push()
      testArr.push()
      testArr.push()

      validArr(arr[col]) ? col+=3 : countInvalid++;
    }
    return countInvalid > 0 ? false : true
  }

  console.log('Rowscheck: ',checkRows(input))
  console.log('Colscheck: ',checkCols(input))
  console.log('Squarecheck: ',checkSquare(input))

  // return checkRows(input) && checkCols(input) && checkSquare(input)
  return false
}

sudokuCheck([
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
])