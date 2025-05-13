/**
The Challenge
Difficulty: Easy

Topic: Date Manipulation

Description
Create a function to determine if a given year is a leap year. A year is a leap year if it is divisible by 4. However, if the year is a century (divisible by 100), it must also be divisible by 400 to qualify as a leap year.
 */


export function isLeapYear (input: number):boolean  {

  const criteria1 = input % 4 === 0;
  const criteria2 = input % 100 !== 0;
  const criteria3 = input % 400 === 0;

  return criteria1 && (criteria2 || criteria3)

}
