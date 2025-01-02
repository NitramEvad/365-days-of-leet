// keeping it simple for day2 also - technically still on holiday and will aim for a load of 7th kyu in January

// DAY2: pass two strings as arguments to the function. If the first ends with the second, return TRUE.

// very simple but first time I've used (and seen) the endsWith string method.

function solution (str, endStr) {
    return str.toLowerCase().endsWith(endStr.toLowerCase())
}

module.exports = solution;