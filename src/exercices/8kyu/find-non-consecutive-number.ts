//* https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/typescript

export const initFirstNonConsecutive = (): null | number =>
	firstNonConsecutive([-9, -8, -7, -6, -5, -4, -2]);

export const firstNonConsecutive = (arr: number[]): null | number => {
	if (arr.length < 2) return null;
	for (let i = 1; i <= arr.length - 1; i++) {
		console.log(i, arr[i - 1] + 1, arr[i]);
		if (arr[i - 1] + 1 !== arr[i]) return arr[i];
	}
	return null;
};
