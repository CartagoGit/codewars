export const initSumArray = () => sumArray([1,6]);

export const sumArray = (array: number[] | null): number => {
	if (
		!Array.isArray(array) ||
		array.every((n) => n === 1) ||
		array.every((n) => !n)
	)
		return 0;

	let sortedArray = array.sort((a, b) => a - b);
	sortedArray.pop();
	sortedArray.shift();
	return sortedArray.length ? sortedArray.reduce((acc, curr) => acc + curr) : 0;
}
