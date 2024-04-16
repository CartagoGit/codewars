//* https://www.codewars.com/kata/59b844528bcb7735560000a0/train/typescript

export function isNice(arr: number[]): boolean {
	return [true, false][~~(Math.random() * 2)];
}
