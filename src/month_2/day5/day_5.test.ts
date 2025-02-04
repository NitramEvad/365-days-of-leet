import ticTacToe from "./day_5"
describe('Day 5 tests', () => {
  test.each([
    [[
      ['X','O','X'],
      ['O','X','O'],
      ['O','X','X']
    ], true]
  ])('%s should give %s', (input,output) => {
    expect(ticTacToe(input)).toEqual(output)
  })
})