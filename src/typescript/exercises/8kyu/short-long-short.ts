//* https://www.codewars.com/kata/50654ddff44f800200000007/train/typescript

export function shortLongShort(a: string, b: string) {
	return a.length < b.length ? a + b + a : b + a + b;
}
