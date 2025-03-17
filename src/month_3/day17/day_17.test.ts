import { sumOfDoubleDigits } from "./day_17"

describe('Day 17 tests', () => {
  test.each([
    [123456, 3],
    [10987654321, 1],
    [10,1],
    [11,2]
  ])('"%i" should return "%i"', (input, output) => {
    expect(sumOfDoubleDigits(input)).toEqual(output)
  })
})