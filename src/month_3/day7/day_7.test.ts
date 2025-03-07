import { isPalindrome } from "./day_7";

describe('Day 7 tests', () => {
  test.each([
    ['race be car', true],
    ['x Ten etX', true],
    ['a', true],
    ['aa',true],
    ['abcba', true],
    ['abccba', true],
    ['abcd', false],
    ['A man a plan a canal Panama', true],
    ['No lemon no melon', true],
    ['Was it a car or a cat I saw', true],
    ['Not a palindrome', false]
  ])('"%s" should return %s', (input, output) => {
    expect(isPalindrome(input)).toEqual(output)
  })
  test.each([
    ['race be car'],
    ['a'],
    ['aa'],
    ['abcba'],
    ['abccba'],
    ['A man a plan a canal Panama'],
    ['No lemon no melon'],
    ['Was it a car or a cat I saw']
  ])('"%s" should return TRUE', (input) => {
    expect(isPalindrome(input)).toBeTruthy()
  })
  test.each([
    ['race bee car'],
    ['abcd'],
    ['Not a palindrome']
  ])('"%s" should return FALSE', (input) => {
    expect(isPalindrome(input)).toBeFalsy()
  })
})