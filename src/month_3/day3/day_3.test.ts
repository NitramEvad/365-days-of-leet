import { singleInstances } from "./day_3"

describe('Day 3 tests', () => {
  test.each([
    [[1,3],[1,3]],
    [[1,3,1,],[]],
    [[1,2,1,3],[2,3]],
    [[1,2,1,3],[2,3]],
    [[0,0,1,3],[1,3]],
    [[5,1,0,1,0,3],[3,5]],
    [[1,3,5,1,3,7,9,8,8],[]],
    [[1,7,3,5,1,3,7,9,8,8],[5,9]]
  ])('%s should result in %s', (input, output) => {
    expect(singleInstances(input)).toEqual(output)
  })
})