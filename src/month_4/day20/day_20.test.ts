import { removeConsecutiveDuplicates } from './day_20'
describe ('Day 19 tests', () => {
  test.each([
    ['abcdddefggghhhi', 'abcdefghi'],
    ['abcdddefggghhhijjjjj', 'abcdefghij'],
  ])('expect "%s" to equal "%s"', (input,output) => {
    expect(removeConsecutiveDuplicates(input)).toEqual(output)
  })
})