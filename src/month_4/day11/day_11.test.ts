import { dateFormatter } from "./day_11";

describe ('Day 11 tests', () => {
  test.each([
    [['2025-02-10','2025-02-15','2025-02-25','2025-02-27'],10],
    [['2025-02-10','2025-02-08','2025-02-09','2025-02-06'],1],
    [['2025-02-10','2025-02-12'],2],
    [['2025-02-10','2025-02-08'],0],

  ])('expect %j to equal %j', (input,output) => {
    expect(dateFormatter(input)).toEqual(output)
  })
})