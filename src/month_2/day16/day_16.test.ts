import { removeDuplicates } from "../day16/day_16"

describe('Day 16 tests', () => {
  test.each([
    ['abcccdccdcef','abcdcdcef'],
    ['davidwill be innn thhhhhheeeee','davidwil be in the'],
  ])('"%s" should return "%s"', (input, output) => {
    expect(removeDuplicates(input)).toEqual(output)
  })
})