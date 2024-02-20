//* https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/typescript

export const isReallyNaN = (val: any): boolean => val !== val && isNaN(Number(val));
