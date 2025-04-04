import { matrix } from "./day_3";

describe ('Day 3 tests', () => {
  test.each([
    [[[1,2,3],[4,5,6],[1,4,6]],6],
    [[['a','b','c'],['a','b','x'],['a','z','n']],6],
    [[[1,2],[3,4],[10,10]],5],
  ])('Expect %j to return %i', (input, output) => {
    expect(matrix(input)).toEqual(output)
  })
})