import { binaryGap } from './day_11'

describe('Day 11 tests', () => {
  test.each([
    [25,5],
    [1,5],
    [30,5],
  ])('expect %i to equal %i', (input, output) => {
    expect(binaryGap(input)).toEqual(output)
  })
})