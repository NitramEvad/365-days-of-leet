import { happyNumber } from './day_6';

describe('Day 6 tests', () => {
  test.each([
    [19, true],
    [7, true],
    [10, true],
    [13, true],
    [49, true],
    [17, false],
    [18, false],
    [20, false],
    [11, false],
    [100, true],
  ])('"%i" should return "%s"', (input, output) => {
    expect(happyNumber(input)).toEqual(output)
  })
})