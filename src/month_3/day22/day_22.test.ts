import { collatzSeq } from "./day_22"

describe('Day 22 tests', () => {
  test.each([
    [0,[]],
    [10,[5, 16, 8, 4, 2, 1]],
    [15,[46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]],
  ])('%i should return %j', (input, output) => {
    expect(collatzSeq(input)).toEqual(output)
  })
})