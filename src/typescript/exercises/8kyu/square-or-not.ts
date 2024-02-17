//* https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/typescript

export function squareOrSquareRoot(array: number[]): number[] {
	return array.map((num) =>
		Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2
	);
}
