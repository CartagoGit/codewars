//* https://www.codewars.com/kata/573992c724fc289553000e95/train/typescript

export function smallest(num: number): number[] {
	let result: [number, number, number] = [num, 0, 0]; // [smallest, initIndex, finalIndex]
	const nums = num.toString().split('').map(Number);
	for (let initIndex = 0; initIndex < nums.length; initIndex++) {
		for (let finalIndex = 0; finalIndex < nums.length; finalIndex++) {
			if (initIndex === finalIndex) continue;
			const newNums = [...nums];
			newNums.splice(initIndex, 1);
			newNums.splice(finalIndex, 0, nums[initIndex]);
			const newNum = Number(newNums.join(''));
			if (newNum < result[0]) result = [newNum, initIndex, finalIndex];
		}
	}
	return result;
}
