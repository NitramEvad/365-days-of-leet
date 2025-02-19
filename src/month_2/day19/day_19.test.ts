import { pascale } from './day_19'

describe ('Day 19 tests - Pascale\'s triangle', () => {
  test.each([
    [1,[1]],
    [2,[1,2,1]],
    [3,[1,3,3,1]],
    [4,[1,4,6,4,1]],
    [8,[1,8,28,56,70,56,28,8,1]],
    [20,[1,20,190,1140,4845,15504,38760,77520,125970,167960,184756,167960,125970,77520,38760,15504,4845,1140,190,20,1]],
  ])('%i should return %s', (input, output) => {
    expect(pascale(input)).toEqual(output)
  })
})