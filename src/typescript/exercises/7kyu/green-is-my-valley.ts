//* https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/typescript

export function makeValley(arr: number[]): number[] {
	let leftWing: number[] = [];
	let rightWing: number[] = [];
	const sortArray = [...arr].sort((a, b) => a - b);
	const isOdd = arr.length % 2 !== 0;
	for (let i = 0; i < sortArray.length; i++) {
        if(i === 0 && isOdd) leftWing.push(sortArray[i]);
		else if (i % 2 === 0) leftWing.unshift(sortArray[i]);
		else rightWing.push(sortArray[i]);
        console.log({i, isOdd, leftWing, rightWing})
	}
	return [...leftWing, ...rightWing];
}
