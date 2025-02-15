import { wordCount } from "./day_15"
describe('Day 15 tests', () => {
  test.each([
    [
      'david has been here; and will come here',
      {david: 1, has: 1, been: 1, here: 2, and: 1, will: 1, come: 1}
    ]
  ])('%s should equal %s', (input, output) => {
    expect(wordCount(input)).toEqual(output)
  })
})