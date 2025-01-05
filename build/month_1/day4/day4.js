"use strict";
/*
Went with 6th kyu as 7th was a bit easy.

Create a parser to interpret and execute the Deadfish language.
Deadfish operates on a single value in memory, which is initially set to 0.
It uses four single-character commands:
i: Increment the value
d: Decrement the value
s: Square the value
o: Output the value to a result array
All other instructions are no-ops and have no effect.

Nice solution
function parse( data ) {
    const result = [];
    const parser = {
        'i': (acc) => ++acc,
        'd': (acc) => --acc,
      's': (acc) => acc ** 2,
        'o': (acc) => {result.push(acc); return acc},
    };
    [...data].reduce((acc,cur) => cur in parser ? parser[curr](acc) : acc , 0);
    return result;
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
function parse(data) {
    const result = [];
    data
        .split("")
        .reduce((acc, cur) => {
        if (cur === 'o')
            result.push(acc);
        if (cur === 'd')
            acc -= 1;
        if (cur === 'i')
            acc += 1;
        if (cur === 's')
            acc *= acc;
        return acc;
    }, 0);
    return result;
}
