//* https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/typescript

export function makeValley(arr: number[]): number[] {
	let leftWing: number[] = [];
	let rightWing: number[] = [];
	const sortArray = [...arr].sort((a, b) => a - b);
	let isTurnLeft = arr.length % 2 !== 0;
	for (let num of sortArray) {
		if (isTurnLeft) leftWing.unshift(num);
		else rightWing.push(num);
		isTurnLeft = !isTurnLeft;
	}
	return [...leftWing, ...rightWing];
}
