//* https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/typescript

export function minSum(arr: number[]): number {
	let sum = 0;
	for (let i = 0; i < arr.length / 2; i++) {
		sum += arr[i] * arr[arr.length - 1 - i];
	}
	return sum;
}
