//* https://www.codewars.com/kata/57741d8f10a0a66915000001/train/typescript

export const intDiff = (arr: number[], n: number): number => {
	arr.sort((a, b) => a - b);
	let counter = 0;
	for (const [index, elem] of arr.entries()) {
		const restArr = arr.slice(index + 1);
		if (restArr.includes(elem + n)) {
			counter += restArr.filter((el) => el === elem + n).length;
		}
	}
	return counter;
};
