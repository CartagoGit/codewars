//* https://www.codewars.com/kata/56f3a1e899b386da78000732/train/typescript

export function partlist(arr: string[]): string[][] {
	let result: string[][] = [];
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) break;
		result.push([
			arr.slice(0, i + 1).join(' '),
			arr.slice(i + 1).join(' '),
		]);
	}
	return result;
}
