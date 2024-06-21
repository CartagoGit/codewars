//* https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/typescript

export function oddOnesOut(nums: number[]) {
	let counter: Record<number, number> = {};
	for (let num of nums) {
		if (counter[num]) counter[num]++;
		else counter[num] = 1;
	}
	return nums.filter((num) => counter[num] % 2 === 0);
}
