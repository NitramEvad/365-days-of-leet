import { nonZeroProduct } from "./day_25"

describe('Day 25 tests', () => {
  test.each([
    [[1,2,3,4,4],96],
    [[2,0,4,0,8],64],
    [[0,1,2,3,4],24],
    [[5,0],5],
  ])('%j should return %i', (input, output) => {
    expect(nonZeroProduct(input)).toEqual(output)
  })
})