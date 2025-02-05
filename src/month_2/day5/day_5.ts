/**
 * https://dev.to/dpc/daily-javascript-challenge-js-45-validate-a-tic-tac-toe-game-state-5bai
 * 
 * The Challenge
 * Difficulty: Medium
 * 
 * Topic: Tic-Tac-Toe Game Logic
 * 
 * Description
 * Given a 3x3 Tic-Tac-Toe board, represented as a 2D array, write a function to validate whether the game state is valid. A valid game state means the board contains the correct number of 'X' and 'O' characters, and there is a maximum of one winner (either 'X' or 'O'). If the board is valid, return true; otherwise, return false.
 */

export default function ticTacToe (arr:string[][]):boolean {

  const winner:string[] = [];
  const tally: {[key: string]: number} = {
    O: 0,
    X: 0,
  }

  // iterate top-left, middle, bottom-right
  for (let i = 0; i < 3; i++) {
    
    // tally total X's and O's
    arr[i].forEach((el) => tally[el]++)

    let current = arr[i][i]
    
    // chk row
    let secondX = arr[i][(i+1)%3]
    let thirdX = arr[i][(i+2)%3]
    if (secondX === current && thirdX === current) {
      winner.push(current);
    }
    
    // chk column
    let secondY = arr[(i+1)%3][i]
    let thirdY = arr[(i+2)%3][i]
    if (secondY === current && thirdY === current) {
      winner.push(current);
    }

    // chk diag
    if (i === 0) {
      let secondY = arr[(i+1)%3][(i+1)%3]
      let thirdY = arr[(i+2)%3][(i+2)%3]
      if (secondY === current && thirdY === current) {
        winner.push(current);
      }

    }
    if (i === 3) {
      let secondY = arr[(i+1)%3][i]
      let thirdY = arr[(i+2)%3][i]
      if (secondY === current && thirdY === current) {
        winner.push(current);
      }
    }
  }
  
  return (
    // fail if:
    winner.length > 2 // more than two winning lines
    || winner.length === 2 && winner[0] !== winner[1] // two winners
    || Math.abs(tally['O'] - tally['X']) !== 1 // too many turns
  ) ? false : true  

}