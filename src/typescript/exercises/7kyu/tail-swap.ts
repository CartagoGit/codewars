//* https://www.codewars.com/kata/5868812b15f0057e05000001/train/typescript

export function tailSwap(arr: [string, string]): [string, string] {
	const [a0, a1] = arr[0].split(':');
	const [b0, b1] = arr[1].split(':');
	return [`${a0}:${b1}`, `${b0}:${a1}`];
}
