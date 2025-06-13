import { matrixDiagonal } from "./day_12";

describe('Day 12 tests', () => {
  test.each([
    [[[10,20],[100,200]],210],
    [[[1,2,3],[4,5,6],[7,8,9]],15],
  ])('expect %j to equal %i', (input, output) => {
    expect(matrixDiagonal(input)).toEqual(output)
  })
})