//* https://www.codewars.com/kata/593a061b942a27ac940000a7/train/typescript

export function gettingMad(array: number[]): number {
	const resultArr: number[] = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (j === i) continue;
			resultArr.push(Math.abs(array[i] - array[j]));
		}
	}
	return Math.min(...resultArr);
}
