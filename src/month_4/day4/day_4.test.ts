import { sumAllPositive } from "./day_4";

describe('Day 4 tests', () => {
  test.each([
    [[0],0],
    [[0, 1],1],
    [[-1, 0, 1],1],
    [[-2,-1,-3],0],
    [[5,10,15,20],50],
  ])('expect %j to return %i', (input, output) => {
    expect(sumAllPositive(input)).toEqual(output)
  })
})