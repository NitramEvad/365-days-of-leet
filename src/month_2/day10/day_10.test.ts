import { wordReverser } from './day_10'

describe('Day 10 tests', () => {
  test.each([
    ['The quick brown fox jumps over the lazy dog','dog lazy the over jumps fox brown quick The'],
    ['Why isn\'t this working the way I want','want I way the working this isn\'t Why'],
    ['',''],
  ])('%s should equal %s', (input, output) => {
    expect(wordReverser(input)).toEqual(output)
  })
})