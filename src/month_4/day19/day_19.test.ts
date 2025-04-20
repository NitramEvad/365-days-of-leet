import { fib } from './day_19'
describe ('Day 19 tests', () => {
  test.each([
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 6],
    [4, 24],
  ])('expect "%i" to equal "%i"', (input,output) => {
    expect(fib(input)).toEqual(output)
  })
})