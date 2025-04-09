/**
https://dev.to/dpc/daily-javascript-challenge-js-107-validate-sudoku-board-32de
Daily JavaScript Challenge: Validate Sudoku Board
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Validation

Description
Write a function that takes a 9x9 2D array representing a Sudoku board and returns true if it is a valid configuration according to Sudoku rules, and false otherwise. The board might contain the numbers 1 to 9 and empty cells represented by zeros.
 */

export function sudoku (input:number[][]):boolean {

  type ColOrRow = "row" | "col"
  
  const checkRowOrCol = (type:ColOrRow) => {
    for (let i = 0; i < input.length; i++) {
      const dataSet = new Set<number>()
      for (let k = 0; k < input.length; k++) {
        let value = (type === "row" ? input[i][k] : input[k][i])
        if (dataSet.has(value) || value > input.length || value < 1)
          return false
        dataSet.add(value)
      }
    }
    return true
  }
  
  const checkSubGrid = () => {
    for (let gridRow = 0; gridRow < 3; gridRow++) {
      for (let gridCol = 0; gridCol < 3; gridCol++) {
        const gridSet = new Set<number>();
        for (let row = gridRow * 3; row < gridRow * 3 + 3; row++) {
          for (let col = gridCol * 3; col < gridCol * 3 + 3; col++) {
            const value = input[row][col];
            if (value !== 0) {
              if (gridSet.has(value) || value > input.length || value < 1) return false;
              gridSet.add(value);
            }
          }
        }
      }
    }
    return true
  }

  if (
    !checkRowOrCol("col") 
    || !checkRowOrCol("row") 
    || !checkSubGrid()
  ) {
    return false
  } else {
    return true
  }
}
