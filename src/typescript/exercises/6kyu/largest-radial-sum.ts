//* https://www.codewars.com/kata/64edf7ab2b610b16c2067579/train/java

export function largestRadialSum(arr: number[], d: number): number {
	const n = arr.length;
	const size = n / d;
	const result: number[] = Array.from({ length: size }, () => 0);
	for (let i = 0; i < n; i++) {
		const indexResult = i % size;
		result[indexResult] += arr[i];
	}
	return Math.max(...result);
}
