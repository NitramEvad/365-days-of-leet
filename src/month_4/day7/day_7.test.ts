import { pallindrome } from './day_7';

describe('Day 7 tests', () => {
  test.each([
    ['the cat tac the',false],
    ['the cat tac eht',true],
    ['a race car race cara',true],
    ['asfdeeefwefwe',false],
  ])('"%s" should return %s', (input, output) => {
    expect(pallindrome(input)).toEqual(output)
  })
})