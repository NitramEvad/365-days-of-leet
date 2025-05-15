import { longestSubString } from './day_10'

describe('Day 10 test', () => {
  test.each([
    ['thequickbbrownffoxxxxxjumpsssovrrrerthelazydoggg',11],
    ['a',1],
    ['aab',2],
    ['abb',2],
    ['ab',2],
  ])('expect %s to equal %i', (input, output) => {
    expect(longestSubString(input)).toEqual(output)
  })
})