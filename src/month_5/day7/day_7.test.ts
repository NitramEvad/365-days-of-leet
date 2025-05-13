import { isLeapYear } from "./day_7";

describe('Day 4 tests', () => {
  test.each([
    [4,true],
    [400,true],
    [1600,true],
    [1804,true],
    [1904,true],
    [2000,true],
    [2020,true],
    [100,false],
    [1700,false],
    [1800,false],
    [1900,false],
    [2021,false],
  ])('expect %i to return %s', (input,output) => {
    expect(isLeapYear(input)).toEqual(output)
  })
})