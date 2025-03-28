/**
 * https://dev.to/dpc/daily-javascript-challenge-js-94-reverse-words-in-a-sentence-2ije
 * Daily JavaScript Challenge: Reverse Words in a Sentence
 * Difficulty: Easy
 * 
 * Topic: String Manipulation
 * 
 * Description
 * Given a sentence as a string, write a function to reverse the order of the words. Each word is separated by a single space, and the sentence does not contain leading or trailing spaces. Ensure that the words are reversed but the characters within each word remain in their original order.
 */

export function reverse (sentence:string):string {
  
  return sentence
  .split(' ')
  .reverse()
  .join(' ')
}
