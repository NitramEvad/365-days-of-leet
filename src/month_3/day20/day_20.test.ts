import { primeAdd } from "./day_20"

describe('Day 20 tests', () => {
  test.each([
    [0,0],
    [1,0],
    [2,2],
    [3,5],
    [5,10],
    [7,17],
    [8,17],
    [9,17],
    [10,17],
  ])('"%i" should return %i', (input, output) => {
    expect(primeAdd(input)).toEqual(output)
  })
})