import { decimalToRoman } from "./day_21"

describe('Day 21 tests', () => {
  test.each([
    [0,''],
    [1994,'MCMXCIV'],
  ])('%i should return "%s"', (input, output) => {
    expect(decimalToRoman(input)).toEqual(output)
  })
})