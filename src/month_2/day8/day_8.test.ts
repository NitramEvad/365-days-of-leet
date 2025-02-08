import { wordCount } from './day_8'

describe('Day 8 tests', () => {
  test.each([
    ['the apple is a apple only the day', 
      {
      'the': 2,
      'apple': 2,
      'is': 1,
      'a': 1,
      'only': 1,
      'day': 1,
      }
    ],
    ['a', 
      {'a': 1}
    ],
  ])('$s should equal object', (input, output) => {
    expect(wordCount(input)).toEqual(output)
  })
})