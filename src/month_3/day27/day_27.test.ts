import { bracketBalancer } from "./day_27"

describe('Day 24 tests', () => {
  test.each([
    ['[]', true],
    ['[]{}', true],
    ['[]{}()', true],
    ['{[{}]{[]}()()}', true],
    ['([)]{}', false],
    ['sfsfd(sf[dfd]sd)sdf{sdfsf}fs[df]fdsd', true],
  ])('"%s" should return %s', (input, output) => {
    expect(bracketBalancer(input)).toEqual(output)
  })
})