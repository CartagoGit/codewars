//* https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/typescript

export const noOdds = (values: number[]): number[] =>
	values.filter((value) => value % 2 === 0);
