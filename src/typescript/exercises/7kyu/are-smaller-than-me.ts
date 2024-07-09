//* https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/typescript

export function smaller(nums: number[]): number[] {
	let result: number[] = [];
	for (let i = 0; i < nums.length; i++) {
		const restArr = nums.slice(i + 1);
		const count = restArr.filter((num) => num < nums[i]).length;
		result.push(count);
	}
	return result;
}
