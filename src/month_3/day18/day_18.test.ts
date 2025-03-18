import { symmetryCheck } from './day_18'

describe('Day 18 tests', () => {
  test.each([
    [[1], true],
    [[1,2], false],
    [[1, 2, 3, 2, 1], true],
    [['a', 'b', 'c', 'b', 'a'], true],
    [['a', 'b', 'c', 'c', 'b', 'a'], true],
    [['a', 'b', 'c', 'c', 'l', 'b', 'a'], false],
  ])('expect %j to be "%s"', (input, output) => {
    expect(symmetryCheck(input)).toEqual(output)
  })
})