import { singles } from './day_27'

describe('Day 27 tests', () => {
  test.each([
    [[1,2,3,4,3,5,2,4,],[1,5]],
  ])('%s should return %s', (input, output) => {
    expect(singles(input)).toEqual(output)
  })
})