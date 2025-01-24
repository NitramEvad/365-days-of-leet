/*
Ok, this one looks a little easy. But big rowing sesh this morning and yoga this evening, plus other coding. So keeping it simple:
https://dev.to/dpc/daily-javascript-challenge-js-35-calculate-the-product-of-digits-596p
*/

export function product (num:number):number {
  return Math.abs(num)
    .toString()
    .split('')
    .map(el => parseInt(el,10))
    .reduce((acc,cur) => acc *= cur)  
}