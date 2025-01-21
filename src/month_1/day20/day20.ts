/*
Not much time left for day-20 so knocking out an 8th kyu in the hour left before midnight
https://www.codewars.com/kata/57e921d8b36340f1fd000059
*/

export function shark(
    pontoonDistance: number, 
    sharkDistance: number, 
    youSpeed: number, 
    sharkSpeed: number, 
    dolphin: boolean
): string {
    // time for you to reach pontoon
    const youTime = pontoonDistance / youSpeed;

    // time for shark to reach pontoon
    // time will be doubled if a dolphin is present as it chases the shark
    const sharkTime = (sharkDistance / sharkSpeed) * (dolphin ? 2 : 1 );

    // outcome
    return youTime < sharkTime ? 'Alive!' : 'Shark Bait!'
}

