//* https://www.codewars.com/kata/574b3b1599d8f897470018f6/typescript

export const getRealFloor = (n: number): number =>
	n > 13 ? n - 2 : n > 0 ? n - 1 : n;
