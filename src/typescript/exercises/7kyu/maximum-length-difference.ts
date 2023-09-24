//* https://www.codewars.com/kata/5663f5305102699bad000056/train/typescript

export const mxdiflg = (a1:string[], a2:string[]): number => {
    if([a1, a2].some(arr => arr.length === 0)) return -1;
    let result = -1;
    for(let a1Field of a1) {
        for(let a2Field of a2) {
           const abs = Math.abs(a1Field.length - a2Field.length);
           result = Math.max(result, abs);
        }
    }
    return result;
  }