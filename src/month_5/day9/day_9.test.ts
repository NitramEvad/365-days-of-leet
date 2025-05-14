import { matrixDiagonalSum } from "./day_9";

describe('Day 9 tests', () => {
  test.each([
    [[[1,2,3],[4,5,6],[7,8,9]],15],
    [[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],34],
    [[[1,10],[50,100]],101],
    [[[1]],1],

  ])('expect %j to return %i', (input,output) => {
    expect(matrixDiagonalSum(input)).toEqual(output)
  })
})