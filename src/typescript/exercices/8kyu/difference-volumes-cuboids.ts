//* https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/typescript

export const findDifference = (
	a: [number, number, number],
	b: [number, number, number]
): number => {
	const diference =
		a.reduce((acc, cur) => acc * cur) - b.reduce((acc, cur) => acc * cur);
	return Math.abs(diference);
};
