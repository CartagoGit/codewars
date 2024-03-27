//* https://www.codewars.com/kata/534d0a229345375d520006a0/train/typescript

export function isPowerOfTwo(n: number): boolean {
	return Number.isInteger(Math.log2(n));
}
