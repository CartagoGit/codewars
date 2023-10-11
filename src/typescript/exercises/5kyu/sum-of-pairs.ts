//* https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript

type Pair = [number, number];

//* Looking for efficient solution

export function sumPairs(nums: number[], sum: number): Pair | undefined {
    const numSet = new Set<number>();
    for (const num of nums) {
        const complement = sum - num;
        if (numSet.has(complement)) return [complement, num];
        numSet.add(num);
    }
    return undefined;
}

// type PairData = { values: Pair; secondIndex: number };

// export function sumPairs(nums: number[], sum: number): Pair | undefined {
// 	let pairs: PairData[] = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === sum) {
// 				pairs.push({ values: [nums[i], nums[j]], secondIndex: j });
// 				break;
// 			}
// 		}
// 	}
// 	let result: PairData | undefined = undefined;
// 	for (let pair of pairs) {
// 		if (result === undefined || pair.secondIndex < result.secondIndex)
// 			result = { ...pair };
// 	}
// 	return result?.values;
// }

