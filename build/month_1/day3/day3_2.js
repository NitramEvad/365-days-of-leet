"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openOrSenior2 = void 0;
const openOrSenior2 = data => {
    const MINIMUM_AGE = 55;
    const MINIMUM_HANDICAP = 7;
    return data.map(([age, handicap]) => (age >= MINIMUM_AGE && handicap > MINIMUM_HANDICAP) ? 'Senior' : 'Open');
};
exports.openOrSenior2 = openOrSenior2;
