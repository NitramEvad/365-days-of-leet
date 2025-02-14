import { pallindrome } from './day_14';

describe('Day 14 tests cases', () => {
  test.each([
    ['A man, a plan, a canal: Panama',true],
    ['race a car',false],
    ['',true],
  ])('"%s" should return %s', (input, output) => {
    expect(pallindrome(input)).toEqual(output)
  })
})
