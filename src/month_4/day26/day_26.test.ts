import { longestCommonPrefix } from "./day_26";

describe('Day 26 tests', () => {
  test.each([
    [['','',''],'xyz']
  ])('expect %j to return %j', (input,output) => {
    expect(longestCommonPrefix(input)).toEqual(output)
  })
})