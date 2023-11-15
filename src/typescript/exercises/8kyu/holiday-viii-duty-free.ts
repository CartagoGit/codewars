//* https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/typescript

export const dutyFree = (
	normPrice: number,
	discount: number,
	hol: number
): number => Math.floor(hol / (normPrice * (discount / 100)));
