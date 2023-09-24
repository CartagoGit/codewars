//* https://www.codewars.com/kata/64edf7ab2b610b16c2067579/train/java

export function largestRadialSum(arr: number[], d: number): number {
	const result: number[] = Array.from({ length: d }, () => 0);

	for (let i = 0; i < arr.length; i++) {
		const indexResArray = i % d;
		result[indexResArray] = result[indexResArray] + arr[i];
	}

	return Math.max(...result);
}
