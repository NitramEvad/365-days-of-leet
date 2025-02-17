import { rearrangeArr } from "./day_17";

describe('Day 17 tests', () => {
  test.each([
    [[0,0],true],
    [[0,2],true],
    [[-3,-2,-1,0,1],true],
    [[1,2,2,3,4,5],false],
    [[1,2,3,4,5],true],
    [[1,2,4,5,6],false],
  ])('%s should return %s', (input, output) => {
    expect(rearrangeArr(input)).toEqual(output)
  })
})