//* https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/typescript

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
	return [...arr1, ...arr2].reduce((curr, num) => (curr += num), 0);
};
