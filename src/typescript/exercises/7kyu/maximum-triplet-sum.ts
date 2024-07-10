//* https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/typescript

export function maxTriSum(nums: number[]): number {
	const uniqueNums = [...new Set(nums)];
	const sortedNums = uniqueNums.sort((a, b) => b - a);
	return sortedNums.slice(0, 3).reduce((acc, num) => acc + num, 0);
}
