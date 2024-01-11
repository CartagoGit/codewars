//* https://www.codewars.com/kata/5a905c2157c562994900009d/train/typescript

export const productArray = (nums: number[]): number[] => {
	const arrayProd = nums.reduce((acc, curr) => acc * curr);
	return nums.map((num) => arrayProd / num);
};
