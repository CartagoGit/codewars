//* https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/typescript

export function arrayLeaders(numbers: number[]): number[] {
	let result: number[] = [];
	let sumRightNums = 0;
	for (let i = numbers.length - 1; i >= 0; i--) {	
		if (numbers[i] > sumRightNums) result.unshift(numbers[i]);
        sumRightNums += numbers[i];
	}
	return result;
}
