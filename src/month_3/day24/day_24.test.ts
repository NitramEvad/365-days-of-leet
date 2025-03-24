import { nestedPatterns } from "./day_24"

describe('Day 24 tests', () => {
  test.each([
    ['',''],
  ])('"%s" should return "%s"', (input, output) => {
    expect(nestedPatterns(input)).toEqual(output)
  })
})