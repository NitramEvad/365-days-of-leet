import { longestCommonPrefix } from "./day_26";

describe('Day 26 tests', () => {
  test.each([
    [['cbcaxyz', 'cb123', 'cbcdnpo', 'cbcdeabbba'],'cb'],
    [['cbcaxyz', 'xcb123', 'cbcdnpo', 'cbcdeabbba'],'']
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(longestCommonPrefix(input)).toEqual(output)
  })
})
