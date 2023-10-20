//* https://www.codewars.com/kata/55be10de92aad5ef28000023/train/typescript

export function checkchoose(numPosters: number, numColors: number): number {
	let x = 1;
	let nChooseX = numColors;
	while (nChooseX !== numPosters && x <= numColors) {
		x++;
		nChooseX = (nChooseX * (numColors - x + 1)) / x;
	}
	return nChooseX === numPosters ? x : -1;
}
