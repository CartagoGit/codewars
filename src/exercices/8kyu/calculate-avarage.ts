export const findAverage = (array: number[]): number =>
	array.reduce((a, b) => a + b, 0) / array.length || 0;
