// ** https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/typescript

export function countPositivesSumNegatives(input: number[] | null): number[] {
    if(!input?.length) return []
	return input.reduce(
		(acc, curr) => {
			if (curr > 0) acc[0]++;
			if (curr < 0) acc[1] += curr;
			return acc;
		},
		[0, 0]
	);
}
