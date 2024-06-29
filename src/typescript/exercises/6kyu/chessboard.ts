//* https://www.codewars.com/kata/55ab4f980f2d576c070000f4/train/typescript

export const game = (length: number): number[] =>
	length % 2 !== 0 ? [length * length, 2] : [(length * length) / 2];

