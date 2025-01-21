import { shark } from "./day20"

describe('Day 20 tests', () => {
    test.each([
        [12, 50, 4, 8, true, "Alive!"],
        [7, 55, 4, 16, true, "Alive!"],
        [24, 0, 4, 8, true, "Shark Bait!"],
        [40, 35, 3, 20, true, "Shark Bait!"],
        [7, 8, 3, 4, true, "Alive!"],
    ])('test cases', (
        pontoonDistance,
        distanceToShark,
        youSpeed,
        sharkSpeed,
        dolphin, 
        output
    ) =>{
        expect(shark(
            pontoonDistance,
            distanceToShark,
            youSpeed,
            sharkSpeed,
            dolphin
        )).toEqual(output)
    })
})