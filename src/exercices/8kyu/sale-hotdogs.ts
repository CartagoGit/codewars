//* https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/typescript

export const saleHotdogs = (n: number): number =>
	n * (n < 5 ? 100 : n < 10 ? 95 : 90);
