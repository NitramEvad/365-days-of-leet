import { longestCommonPrefix } from "./day_26";

describe('Day 26 tests', () => {
  test.each([
    [['cbcaxyz', 'cb123', 'cbcdnpo', 'cbcdeabbba'],['cb']]
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(longestCommonPrefix(input)).toEqual(output)
  })
})
