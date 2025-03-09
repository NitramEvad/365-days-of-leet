import { sorter } from './day_8'

describe('Day 8 tests', () => {
  test.each([
    [[
      { name: 'aaffgd', age: 20},
      { name: 'bbdfgdfg', age: 200},
      { name: 'bb-adfgdfg', age: 200},
      { name: 'dfgdfgddfgdggg', age: 10}
    ]
      ,
    [
      { name: 'bbdfgdfg', age: 200 },
      { name: 'bb-adfgdfg', age: 200 },
      { name: 'aaffgd', age: 20 },
      { name: 'dfgdfgddfgdggg', age: 10 }
    ]]
  ])('expect %j to equal %j', (input, output) => {
    expect(sorter(input)).toEqual(output)
  })
})