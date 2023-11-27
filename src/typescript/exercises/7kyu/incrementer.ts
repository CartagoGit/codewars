//* https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/typescript

export function incrementer(nums: number[]): number[] {
	return nums.map((num, index) => (num + index + 1) % 10);
}
