//* https://www.codewars.com/kata/54da5a58ea159efa38000836/typescript

export const findOdd = (xs: number[]): number => {
	let result: number[] = [];
	for (let value of xs) {
		const exist = result.some((num) => num === value);
		if (exist) result = result.filter((num) => num !== value);
		else result.push(value);
	}
	return result[0];
};
