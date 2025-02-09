import {factorial, findFactorial, recursiveFactorial} from './day_9_1';

describe('Day 9 tests', () => {
  describe('fn factorial', () => {
    test.each([
      [10,3628800],
      [0, 1],
      [1, 1],
      [2, 2],
      [3, 6],
    ])('factorial of %i should equal %i', (input, output) => {
      expect(factorial(input)).toEqual(output);
    })
  })

  describe('fn findFactorial', () => {
    test.each([
      [10,3628800],
      [0, 1],
      [1, 1],
      [2, 2],
      [3, 6],
    ])('factorial of %i should equal %i', (input, output) => {
      expect(factorial(input)).toEqual(output);
    })
  })

  describe('fn recursiveFactorial', () => {
    test.each([
      [10,3628800],
      [0, 1],
      [1, 1],
      [2, 2],
      [3, 6],
    ])('factorial of %i should equal %i', (input, output) => {
      expect(factorial(input)).toEqual(output);
    })
  })
})