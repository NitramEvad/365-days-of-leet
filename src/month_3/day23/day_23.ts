/**
 * https://dev.to/dpc/daily-javascript-challenge-js-91-calculate-average-rgb-values-of-an-image-4lfo
 * The Challenge - Calculate Average RGB Values of an Image
 * Difficulty: Medium
 * 
 * Topic: Image Processing
 * 
 * Description
 * Create a function that calculates the average RGB values from a given list of pixel RGB values. Each pixel is represented as an array of three integers [R, G, B], and you are to return a single array containing the average R, G, and B values, rounded to the nearest whole number.
 */

export function rgbValue (input:number[][]):number[] {

  let result:number[] = [0,0,0];

  result = input.reduce((acc, cur) => {
    return [acc[0] + (cur[0]/3), acc[1] + (cur[1]/3), acc[2] + (cur[2]/3)]
  },[0,0,0])

  return result
}

console.log(rgbValue([[100,10,45],[70,20,45],[70,39,30]]))