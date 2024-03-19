//* https://www.codewars.com/kata/57a386117cb1f31890000039/train/typescript

export function parseF(s: string): number | null {
	const num = parseFloat(s);
	return isNaN(num) ? null : num;
}
