//* https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/typescript

export const past = (h: number, m: number, s: number): number =>
	(h * 3600 + m * 60 + s) * 1000;
