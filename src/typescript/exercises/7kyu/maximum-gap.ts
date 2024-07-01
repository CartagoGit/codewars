//* https://www.codewars.com/kata/5a7893ef0025e9eb50000013/train/typescript

export function maxGap(nums: number[]): number {
	let maxDistance = 0;
    const sortedNums = nums.sort((a, b) => a - b);
	for (let i = 1; i < sortedNums.length; i++) {
		const distance = sortedNums[i] - sortedNums[i - 1];
		if (distance > maxDistance) maxDistance = distance;
	}
	return maxDistance;
}
