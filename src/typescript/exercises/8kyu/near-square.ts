//* https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/train/typescript

export function nearestSq(n: number): number {
	return Math.pow(Math.round(Math.sqrt(n)), 2);
}
