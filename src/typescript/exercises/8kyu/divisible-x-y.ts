//* https://www.codewars.com/kata/5545f109004975ea66000086/train/typescript

export const isDivisible = (n: number, x: number, y: number): boolean =>
	n % x === 0 && n % y === 0;
