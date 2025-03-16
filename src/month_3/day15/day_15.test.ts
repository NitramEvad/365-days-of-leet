import { removeOverlaps } from "./day_15"

describe('Day 15 tests', () => {
  test.each([
    [
      [[1,3],[4,7],[8,9]],
      [[1,3],[4,7],[8,9]]
    ],
    [
      [[1,4],[3,7],[8,9],[11,15],[12,17],[11,19],[30,40]],
      [[1,7],[8,9],[11,19],[30,40]]
    ],
  ])('%j should return %j', (input, output) => {
    expect(removeOverlaps(input)).toEqual(output)
  })
})