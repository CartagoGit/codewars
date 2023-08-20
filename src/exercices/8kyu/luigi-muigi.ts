//* https://www.codewars.com/kata/56b29582461215098d00000f/typescript

export function pipeFix(numbers: number[]): number[] {
	const min = Math.min(...numbers);
	const max = Math.max(...numbers);

	const resultArray = Array.from(
		{ length: max - min + 1 },
		(_, index) => min + index
	);

	return resultArray;
}
