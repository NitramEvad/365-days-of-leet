import {time} from './day25'

describe('Day 25 tests', () => {
  test.each([
    ["11:59","11:59 AM"],
    ["12:00","12:00 PM"],
    ["12:01","12:01 PM"],
    ["23:59","11:59 PM"],
    ["00:00","12:00 AM"],
    ["00:01","12:01 AM"],
    ["09:35","09:35 AM"],
    ["18:35","06:35 PM"],
  ])('Expect %s to be %s', (input,output) => {
    expect(time(input)).toEqual(output)
  })
})