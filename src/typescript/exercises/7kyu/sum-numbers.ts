//* https://www.codewars.com/kata/55f2b110f61eb01779000053/train/typescript

export function getSum(a: number, b: number): number {
    // Good luck!
    let counter = 0;
    if(a === b) return a
    const [min, max] = [Math.min(a, b), Math.max(a, b)]
    for(let i = min; i <= max; i++) {
        counter += i
    }
    return counter
  }