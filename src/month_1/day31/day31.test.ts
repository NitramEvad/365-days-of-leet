import delimiters from "./day31"

describe('Day 31 exercise', () => {
  test.each([
    ['()',true],
    ['a(a)b',true],
    ['az(ads()fdf)',true],
    ['az(ads({})fdf)',true],
    ['az(ads({)fdf)',false],
    ['az(ads(})fdf)',false],
    ['az(ads(ab{df}}f)fdf)',false],
    ['az(ads(ab{df}f)fdf',false],
  ])('%s should return %s', (input, output) => {
    expect(delimiters(input)).toEqual(output)
  })
})