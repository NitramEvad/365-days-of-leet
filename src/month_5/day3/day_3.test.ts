import { arrayMapping } from "./day_3";

describe('Day 3 tests', () => {
  test.each([
    [[1,2,3,2,1,2,4, 'a','b','a'],{1: 2, 2: 3, 3: 1, 4: 1, 'a': 2, 'b': 1}],
    [['a','a','b'],{'a':2, 'b':1}]
  ])('expect %j to return "%j"', (input,output) => {
    expect(arrayMapping(input)).toEqual(output)
  })
})