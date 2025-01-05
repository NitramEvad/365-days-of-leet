"use strict";
// Day3 - another 7th kyu easy challenge, late in the evening after a yoga session that is sending me to sleep.
Object.defineProperty(exports, "__esModule", { value: true });
exports.openOrSenior2 = void 0;
exports.openOrSenior = openOrSenior;
// now that my excuses are out of the way, down to it...
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
function openOrSenior(data) {
    const MINIMUM_HANDICAP = 7;
    const MINIMUM_AGE = 55;
    const result = [];
    data.forEach((person) => {
        (person[0] >= MINIMUM_AGE) && (person[1] > MINIMUM_HANDICAP)
            ? result.push('Senior')
            : result.push('Open');
    });
    return result;
}
const openOrSenior2 = (data) => {
    const MINIMUM_AGE = 55;
    const MINIMUM_HANDICAP = 7;
    return data.map(([age, handicap]) => (age >= MINIMUM_AGE && handicap > MINIMUM_HANDICAP) ? 'Senior' : 'Open');
};
exports.openOrSenior2 = openOrSenior2;
