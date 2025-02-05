import ticTacToe from "./day_5"
describe('Day 5 tests', () => {
  test.each([
    [
      [
        ['X','O','X'],
        ['O','X','O'],
        ['O','X','X']
      ], true
    ],
    [
      [
        ['X','O','O'],
        ['X','O','O'],
        ['X','X','X']
      ], true
    ],
    [
      [
        ['X','X','O'],
        ['X','X','O'],
        ['X','X','O']
      ], false
    ],
    [
      [
        ['X','O','O'],
        ['','X','O'],
        ['','O','X']
      ], true
    ],
  ])('%s should give %s', (input,output) => {
    expect(ticTacToe(input)).toEqual(output)
  })
})