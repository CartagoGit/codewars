//* https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/typescript

export const quarterOf = (month: number): number =>
	Math.floor((month - 1) / 3) + 1;
