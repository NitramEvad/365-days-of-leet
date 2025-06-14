import { arrEvensSum } from "./day_13";

describe('Day 13 tests', () => {
  test.each([
    [[1,2,3,4,5,6,7,8],20],
    [[0,2,4,6,8,10],30],
    [[1,3,5,7,9],0],
  ])('expect %j to equal %i', (input, output) => {
    expect(arrEvensSum(input)).toEqual(output)
  })
})