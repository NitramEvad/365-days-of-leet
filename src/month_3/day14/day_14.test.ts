import { capitalise } from "./day_14"

describe('Day 14 tests', () => {
  test.each([
    ['a quick brown fox jumps over a lazy dog','A Quick Brown Fox Jumps Over A Lazy Dog'],
    ['a','A'],
    ['2ab1s ab1','2ab1s Ab1'],
  ])('%s should return %i', (input, output) => {
    expect(capitalise(input)).toEqual(output)
  })
})