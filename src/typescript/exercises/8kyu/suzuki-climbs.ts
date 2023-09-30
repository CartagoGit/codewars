//* https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/typescript

export function stairsIn20(stairs: number[][]) {
	return (
		stairs.reduce(
			(total, day) =>
				total + day.reduce((sum, stairs) => sum + stairs, 0),
			0
		) * 20
	);
}
