import { commonElements } from "./day_18"

describe('Day 18 tests', () => {
  test.each([
    [[[1,3,5,7,9,11],[0,2,5,21,34,36],[1,5,20,24],[7,11,24,48,52,5]],[5]],
    [[[1,3,5,7,9,11],[0,2,5,21,34,36],[1,5,20,24],[7,11,24,48,52,]],[]]
  ])('%s should return %s', (input, output) => {
    expect(commonElements(input)).toEqual(output)
  })
})