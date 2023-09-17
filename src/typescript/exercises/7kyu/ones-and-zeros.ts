//* https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/typescript

export function binaryArrayToNumber(arr: number[]): number{
    return parseInt(arr.join(''), 2);
  };