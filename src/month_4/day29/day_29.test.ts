import { missingEl } from "./day_29";

describe('Day 29 tests', () => {
  test.each([
    [[8,9,10,12,13,14],11],
    [[8,10,12,16,18],14],
    [[8,10,12,14,18],16],
  ])('expect %j to return %i', (input,output) => {
    expect(missingEl(input)).toEqual(output)
  })
})