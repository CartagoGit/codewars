//* https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/typescript

export function findMultiples(integer: number, limit: number): number[] {
    //your code here
    let multiples: number[] = [];
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i);
    }
    return multiples;
  }