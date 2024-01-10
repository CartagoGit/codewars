//* https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/typescript

export function arrayLeaders(numbers: number[]): number[] {
	let sumRightNums = 0;
	return numbers
		.reverse()
		.filter((num) => {
			const isLeader = num > sumRightNums;
			sumRightNums += num;
			return isLeader;
		})
		.reverse();
}
