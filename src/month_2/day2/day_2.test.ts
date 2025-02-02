import {removeConsecutives} from './day_2'

describe('Day 2 removeConsecutives function tests', () => {
  test.each([
    ['a','a'],
    ['aa','a'],
    ['aaa','a'],
    ['aba','aba'],
    ['abba','aba'],
    ['abbacb','abacb'],
    ['aabcdddddeffffg','abcdefg'],
    ['aabbccddeeffffff','abcdefg'],
  ])('string %s should return %s', (input, output) => {
    expect(removeConsecutives(input)).toEqual(output)
  })
})