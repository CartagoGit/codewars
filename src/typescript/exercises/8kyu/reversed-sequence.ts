//* https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/typescript

export const reverseSeq = (n: number): number[] => {
	return Array.from({ length: n }, (_, i) => n - i);
};
