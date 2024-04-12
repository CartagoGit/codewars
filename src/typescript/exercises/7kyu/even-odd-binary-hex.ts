//* https://www.codewars.com/kata/583ade15666df5a64e000058/train/typescript

export const evensAndOdds = (n: number): string =>
	n.toString(n % 2 === 0 ? 2 : 16);
