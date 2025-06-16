import { zigzag } from "./day_15";

describe('Day 15 challenge', () => {
  test.each([
    ['abcd', false],
    ['abac', true],
    ['AaBbCc', true],
    ['aAbBcC', false],
  ])('expect %s to equal %s', (input, output) => {
    expect(zigzag(input)).toEqual(output)
  })
})