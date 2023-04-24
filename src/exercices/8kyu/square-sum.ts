export const initSquareSum = () => squareSum([1, 2, 2]);

export const squareSum = (numbers: number[]): number =>
	numbers.reduce((acc, curr) => acc + curr ** 2, 0);
