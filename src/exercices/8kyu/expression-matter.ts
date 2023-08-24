//* https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/typescript

export function expressionsMatter(a: number, b: number, c: number): number {
    // highest achievable result
    let highestResult = 0;
    // all possible combinations
    let possibleResults = [
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c
    ];
    // loop through all possible combinations
    for (let posibility of possibleResults) {
        // if current posibility is greater than highestResult
        if (posibility > highestResult) {
            // set highestResult to current posibility
            highestResult = posibility;
        }
    }
    // return highest achievable result
    return highestResult;

 }