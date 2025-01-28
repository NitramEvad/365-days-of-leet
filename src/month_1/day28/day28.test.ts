import longestSubSeq from './day28'

describe('Day 28 tests', () => {
  test.each([
    ['13579', 5],
    ['0', 1],
    ['1111', 1],
    ['12319', 4],
  ])('%s should equal %i', (input, output) => {
    expect(longestSubSeq(input)).toEqual(output)
  })
})