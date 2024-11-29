//* https://www.codewars.com/kata/59a8570b570190d313000037/train/typescript

export function sumCubes(n: number): number {
	return Array.from({ length: n }, (_, i) => i + 1).reduce(
		(acc, num) => acc + num ** 3,
		0
	);
}
