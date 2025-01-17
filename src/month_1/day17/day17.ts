//  a nice simple one for today as working on some actual coding
//
//  https://www.codewars.com/kata/56ed5f13c4e5d6c5b3000745
// 

function cheapestQuote(newspapers:number):number {

    const rate = [
        {number: 40, price: 3.85},
        {number: 20, price: 1.93},
        {number: 10, price: 0.97},
        {number: 5, price: 0.49},
        {number: 1, price: 0.10},
    ]

    let quote = 0;

    rate.forEach((el: any) => {
        let divisor = Math.floor(newspapers / el.number);
        newspapers -= el.number * divisor
        quote += divisor * el.price;
    })

    return +quote.toFixed(2)
}
