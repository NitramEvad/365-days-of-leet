import { recursion } from "./day_2";

describe ('Day 2 tests', () => {
  test.each([
    [[1,2,[3,4,5],4,5,[1,2,[3,[4,5,[6,7]]]],6],5],
    [[1,2,[1,2,3,[1,2,3,4],4,5],3,4],3],
  ])('Expect %j to return %i', (input, output) => {
    expect(recursion(input)).toEqual(output)
  })
})