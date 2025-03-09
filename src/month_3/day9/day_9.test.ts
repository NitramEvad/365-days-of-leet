import { diagonalSum } from "./day_9";

describe('Day 9 challenge', () => {
  test.each([
    [[[1,2,3],[4,5,6,],[7,8,9]],15],
    [[[1,2],[10,20]],21],
    [[[1,2,3,4],[10,20,30,40],[100,200,300,400],[1000,2000,3000,4000]],4321]
  ])('expect %j to return %i', (input, output) => {
    expect(diagonalSum(input)).toEqual(output)
  })
})