//* https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/typescript

export function findOutlier(integers: number[]): number {
	const isEvenArray =
		[...integers].slice(0, 3).filter((num) => num % 2 === 0).length > 1;
	return integers.find((num) => Math.abs(num) % 2 === (isEvenArray ? 1 : 0))!;
}
