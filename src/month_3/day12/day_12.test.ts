import { majorityElement } from "./day_12"

describe('Day 12 tests', () => {
  test.each([
    [[0], -1],
    [[1,3,3,4,3,3,], 3],
    [[1,2,3,4,5,2,2,2,5,2,2], 2],
  ])('%j should return %i', (input, output) => {
    expect(majorityElement(input)).toEqual(output)
  })
})