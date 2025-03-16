import { firstRepeater } from "./day_16"

describe('Day 16 tests', () => {
  test.each([
    ['helo', null],
    ['hello','l'],
    ['hello therrre','l'],
  ])('"%s" should return "%s"', (input, output) => {
    expect(firstRepeater(input)).toEqual(output)
  })
})