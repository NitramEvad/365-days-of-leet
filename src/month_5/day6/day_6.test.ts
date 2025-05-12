import { reverseWords } from "./day_6";

describe('Day 6 tests', () => {
  test.each([
    ['hello my name is david','david is name my hello'],
  ])('expect "%s" to return "%s"', (input,output) => {
    expect(reverseWords(input)).toEqual(output)
  })
})