import { hexToBinary } from "./day_6";

describe('Day 6 tests', () => {
  test.each([
    [621, '0x26D','1001101101'],
    [435, '0x1B3','110110011'],
    [268, '0x10C','100001100'],
    [138, '0x8A','10001010'],
    [461, '0x1CD','111001101'],
  ])('%i in hex "%s" should return "%s"', (actual, input, output) => {
    expect(hexToBinary(input)).toEqual(output)
  })
})