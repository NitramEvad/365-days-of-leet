import symetricArrary from "./day_11"

describe('Day 11 tests', () => {
  test.each([
    [['a','b','c','b','a'],true],
    [['a','b','b','a'],true],
    [['a','b','b','c','a'],false],
  ])('%s to equal %s', (input, output) => {
    expect(symetricArrary(input)).toEqual(output)
  })
})