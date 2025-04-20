import { middleOfString } from './day_18'
describe ('Day 18 tests', () => {
  test.each([
    ['ant','n'],
    ['house','u'],
    ['from','ro'],
    ['it','it']
  ])('expect "%s" to equal "%s"', (input,output) => {
    expect(middleOfString(input)).toEqual(output)
  })
})