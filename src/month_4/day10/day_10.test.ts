import { snakeCase } from "./day_10";

describe ('Day 10 tests', () => {
  test.each([
    ['hello_david_how_are_you', 'Hello David How Are You'],
    ['_hello_david_how_are_you', ' Hello David How Are You'],
    ['Hello_david_how_are_you', 'Hello David How Are You'],
    ['abc__defg_higc', 'Abc  Defg Higc'],
    ['abc_defg_higc', 'Abc Defg Higc'],
  ])('expect "%s" to equal "%s"', (input,output) => {
    expect(snakeCase(input)).toEqual(output)
  })
})