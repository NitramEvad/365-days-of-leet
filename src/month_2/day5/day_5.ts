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
  //  ['X','O','X'],['O','X','O'],['O','X','X']
  // [0]12 , [0]36,
  // ([0]48) , [3]57 
  // [9]87 , [9]63
  // [5]28 , [5]46

  let winner = [];
  let flatArr = [];

  for (let i = 0; i < 3; i++) {
    let current = arr[i][i]
    
    // chk across
    let secondX = arr[i][(i+1)%3]
    let thirdX = arr[i][(i+2)%3]
    if (secondX === current && thirdX === current) {
      winner.push(current);
    }
    
    // chk down
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
  
  if (winner.length === 0 || winner.length > 2) {
    return false 
  } else {
    console.log('Winner:', winner)
    return true
  }
  

}

console.log(ticTacToe([
  ['O','O','X'],
  ['O','X','X'],
  ['O','X','X']
]))