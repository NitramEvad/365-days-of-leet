import { rgbValue } from "./day_23"

describe('Day 23 tests', () => {
  test.each([
    [[[100,10,45],[70,20,45],[70,39,30]],[80,23,40]],
  ])('%i should return %j', (input, output) => {
    expect(rgbValue(input)).toEqual(output)
  })
})