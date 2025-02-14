import cumulativeSum from "./day_13";

describe('Day 3 tests', () => {
  test.each([
    [[1,2,3,4],10],
    [[0,0,0],0],
    [[-1, -2, -5, 3],-5],
  ])('%s should equal %i', (input, output) => {
    expect(cumulativeSum(input)).toEqual(output)
  })
})