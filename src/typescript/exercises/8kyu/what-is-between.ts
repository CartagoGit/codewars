//* https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/typescript

export function between(a: number, b: number): number[] {
	return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
