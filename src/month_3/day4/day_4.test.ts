import { primeFactors } from './day_4'

describe('Day 4 tests', () => {
  test.each([
    [1, []],
    [0, []],
    [2, [ 2 ]],
    [3, [ 3 ]],
    [4, [ 2 ]],
    [5, [ 5 ]],
    [6, [ 2, 3 ]],
    [7, [ 7 ]],
    [8, [ 2 ]],
    [9, [ 3 ]],
    [10, [ 2, 5 ]],
    [11, [ 11 ]],
    [12, [ 2, 3 ]],
    [13, [ 13 ]],
    [14, [ 2, 7 ]],
    [15, [ 3, 5 ]],
    [16, [ 2 ]],
    [17, [ 17 ]],
    [18, [ 2, 3 ]],
    [19, [ 19 ]],
    [12,[2,3]],
  ])('Expect %i to return %s', (input, output) => {
    expect(primeFactors(input)).toEqual(output)
  })
})