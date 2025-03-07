import { isPalindrome } from "./day_7";

describe('Day 7 tests', () => {
  test.each([
    ['race be car', true],
  ])('"%s" should return %s', (input, output) => {
    expect(isPalindrome(input)).toEqual(output)
  })
  test.each([
    ['race be car'],
  ])('"%s" should return TRUE', (input) => {
    expect(isPalindrome(input)).toBeTruthy
  })
  test.each([
    ['race be car'],
  ])('"%s" should return FALSE', (input) => {
    expect(isPalindrome(input)).toBeFalsy
  })
})