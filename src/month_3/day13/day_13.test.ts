import { consecutiveOnes } from "./day_13"

describe('Day 13 tests', () => {
  test.each([
    [[0,1], 1],
    [[0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0], 5],
  ])('%j should return %i', (input, output) => {
    expect(consecutiveOnes(input)).toEqual(output)
  })
})