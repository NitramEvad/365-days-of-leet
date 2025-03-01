import { vowelCount } from "./day_1"

describe('Day 1 tests', () => {
  test.each([
    ['', 0], 
    ['01234567', 0], 
    ['n x z tl',0],
    ['The quick brown fox jumps over the lazy dog', 11], 
    ['a e i ou',5],
    ['abcehi is any',5],
    ['aeiouAEIOU', 10]
  ])('"%s" should return %i', (input, output) => {
    expect(vowelCount(input)).toEqual(output)
  })
})