//* https://www.codewars.com/kata/56f3a1e899b386da78000732/train/typescript

export function partlist(arr: string[]): string[][] {
	return arr
		.map((_word, index) => [
			arr.slice(0, index + 1).join(' '),
			arr.slice(index + 1).join(' '),
		])
		.slice(0, -1);
}
