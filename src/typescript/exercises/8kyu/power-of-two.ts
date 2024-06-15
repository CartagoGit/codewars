//* https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/typescript

export function powersOfTwo(n: number): number[] {
	return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
}
