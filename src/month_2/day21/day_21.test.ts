import { commonPrefix } from './day_21'

describe('Day 21 tests', () => {
  test.each([
    [['abc-djkfghjd','abc-456jij', 'abc-kl43', 'abc-q'],'abc-'],
    [['xy345jh3','xykfljlgdk','xy6465456'],'xy'],
    [['xy345jh3','xykfljlgdk','nxy6465456'],''],
  ])('%s should return %s', (input, output) => {
    expect(commonPrefix(input)).toEqual(output)
  })
})