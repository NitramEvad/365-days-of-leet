/**
https://dev.to/dpc/daily-javascript-challenge-js-110-determine-the-longest-chain-of-consecutive-days-seen-in-logs-35oo
Daily JavaScript Challenge: Determine the Longest Chain of Consecutive Days Seen in Logs
Hey fellow developers! 👋 Welcome to today's JavaScript coding challenge. Let's keep those programming skills sharp!

The Challenge
Difficulty: Medium

Topic: Array Manipulation

Description
Given an array of dates represented as strings in 'YYYY-MM-DD' format, determine the longest chain of consecutive days present in the list. Consecutive days are defined as days that follow one another without any breaks (including weekends and holidays). The function should return the length of this longest chain.
 */

export function dateFormatter (input: string[]):number {
  let dateGap = 0;
  const MILLISECOND_DAYS = 1000 * 60 * 60 * 24

  input.reduce((acc, cur) => {
    const dateStart = new Date(acc)
    const dateFinish = new Date(cur)
    const dateDifference = (dateFinish.getTime() - dateStart.getTime()) / MILLISECOND_DAYS

    if (dateDifference > dateGap) dateGap = dateDifference; 
    return cur
  })

  return dateGap
}
