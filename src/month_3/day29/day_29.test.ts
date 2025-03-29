import { longestNonRepeater } from "./day_29";

describe ('Day 29 tests', () => {
  test.each([
    ['abcddabcdefghhzxy',8],
    ['abcdefg',7],
    ['abcdefgggggzxcy',6],
    ['nnaannaannaabc',3],
  ])('expect %s to equal %s', (input,output) => {
    expect(longestNonRepeater(input)).toEqual(output)
  })
})