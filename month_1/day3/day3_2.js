const openOrSenior2 = data => {
    const MINIMUM_AGE = 55;
    const MINIMUM_HANDICAP = 7;

    return data.map(([age, handicap]) => 
        (age >= MINIMUM_AGE && handicap > MINIMUM_HANDICAP) ? 'Senior' : 'Open'
    )
}

module.exports = openOrSenior2