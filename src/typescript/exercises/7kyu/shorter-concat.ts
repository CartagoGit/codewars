//* https://www.codewars.com/kata/54557d61126a00423b000a45/train/typescript

export function shorterReverseLonger(a: string, b: string): string {
	const short = a.length < b.length ? a : b;
	const long = short === a ? b : a;
	return short + long.split('').reverse().join('') + short;
}
