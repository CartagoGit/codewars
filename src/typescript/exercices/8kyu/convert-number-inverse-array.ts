//* https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript

export const digitize = (n: number): number[] =>
	n.toString().split("").map(Number).reverse();
