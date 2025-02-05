import ticTacToe from "./day_5"
describe('Day 5 tests', () => {

  it('should be TRUE for one winner and full board', () => {
    expect(ticTacToe(
      [
        ['X','O','X'],
        ['O','X','O'],
        ['O','X','X']
      ]
    )).toBeTruthy
  })

  it('should be TRUE for TWO winning lines with ONE winner on a full board ', () => {
    expect(ticTacToe(
      [
        ['X','O','O'],
        ['X','O','O'],
        ['X','X','X']
      ]
    )).toBeTruthy
  })

  it('should be FALSE for a full board with THREE winners ', () => {
    expect(ticTacToe(
      [
        ['X','X','O'],
        ['X','X','O'],
        ['X','X','O']
      ]
    )).toBeFalsy
  })

  it('should be FALSE for a board with TWO DIFFERENT winners ', () => {
    expect(ticTacToe(
      [
        ['X','','O'],
        ['X','','O'],
        ['X','','O'],
      ]
    )).toBeFalsy
  })

  it('should be TRUE for no winner', () => {
    expect(ticTacToe(
      [
        ['X','O','X'],
        ['O','X','O'],
        ['O','X','X']
      ]
    )).toBeTruthy
  })

  it('should be FALSE for a winner but too many turns', () => {
    expect(ticTacToe(
      [
        ['X','','X'],
        ['O','X','O'],
        ['O','X','X']
      ]
    )).toBeFalsy
  })
})