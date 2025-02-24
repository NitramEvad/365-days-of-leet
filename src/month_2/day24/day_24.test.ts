import { circularTraversal } from "./day_24"

describe('Day 23 challenge', () => {
  test.each([
    [[5, 3, 8, -2, 6],[8, 8, -1, 6, 8]],
    [[5, 3, 8, -2, 6, 8],[8, 8, -1, 6, 8, -1]],
    [[5, 6],[6, -1]],
  ])('%s should return %s', (input, output) => {
    expect(circularTraversal(input)).toEqual(output)
  })
})