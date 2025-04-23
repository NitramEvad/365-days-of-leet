import { vowelCount } from './day_23'
describe ('Day 23 tests', () => {
  test.each([
    ['hello', 2],
    ['aeiou', 5],
    ['aeziou', 5],
    ['zaeziouz', 5],
    ['zzzo', 1],
    ['azzzo', 2],
    ['AZZZO', 2],
  ])('expect "%s" to equal %i', (input,output) => {
    expect(vowelCount(input)).toEqual(output)
  })
})