//* https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/typescript

export const saleHotdogs = (n: number): number =>
	n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90;
