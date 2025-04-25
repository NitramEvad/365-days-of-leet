import { rotate90Cw } from "./day_25";

describe('Day 25 tests', () => {
  test.each([
    [[[1,2,3],[4,5,6],[7,8,9]],[[7,4,1],[8,5,2],[9,6,3]]],
  ])('expect %j to return %j', (input,output) => {
    expect(rotate90Cw(input)).toEqual(output)
  })
})