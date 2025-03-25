import { nestedPatterns } from "./day_24"

describe('Day 24 tests', () => {
  test.each([
    [
      'abc efd ${5}[LLL MMMM ${5}[123 456 ] ] sfsdfsd ${5}[XXX YYY]dfgdfgfdg',
      'abc efd LLL MMMM 123 456 123 456 123 456 123 456 123 456  LLL MMMM 123 456 123 456 123 456 123 456 123 456  LLL MMMM 123 456 123 456 123 456 123 456 123 456  LLL MMMM 123 456 123 456 123 456 123 456 123 456  LLL MMMM 123 456 123 456 123 456 123 456 123 456   sfsdfsd XXX YYYXXX YYYXXX YYYXXX YYYXXX YYYdfgdfgfdg'
    ],
  ])('"%s" should return "%s"', (input, output) => {
    expect(nestedPatterns(input)).toEqual(output)
  })
})