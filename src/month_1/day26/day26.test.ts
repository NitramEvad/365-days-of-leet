import longestSubString from "../day26/day26"

describe('Day 27 tests', () => {
  test.each([
    ['a',1],
    ['aa',0],
    ['aaaaa',0],
    ['aab',2],
    ['bbaa',2],
    ['abcddefgghbznfgeeh',8]
  ])('%s should return %i', (input, output) => {
    expect(longestSubString(input)).toEqual(output)
  })
})