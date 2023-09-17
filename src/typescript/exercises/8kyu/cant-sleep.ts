//* https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/typescript

export const countSheep = (num: number): string =>
	[...Array(num).keys()].map((i) => `${i + 1} sheep...`).join("");
