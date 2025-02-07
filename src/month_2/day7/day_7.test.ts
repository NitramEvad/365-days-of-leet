import {strParse} from './day_7'

describe('Day 7 tests', () => {
  test.each([
    ['5+6-4*3/2',10.5], // should be 5
    ['10+2-4*3/2',12],
    ['0+20-10/2*0',0],
  ])('%s should return %i', (input, output) => {
    expect(strParse(input)).toEqual(output)
  })
})