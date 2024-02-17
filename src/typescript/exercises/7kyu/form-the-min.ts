//* https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/typescript

export const minValue = (values: number[]): number => {
	const uniqueValues = [...new Set(values)];
	return Number(
		uniqueValues
			.sort()
			.map((val) => val.toString())
			.join('')
	);
};
