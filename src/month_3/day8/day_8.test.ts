import { sorter } from './day_8'

describe('Day 8 tests', () => {
  test.each([
    [{},{}],
  ])('expect %s to equal %s', (input, output) => {
    expect(sorter(input)).toEqual(output)
  })
})