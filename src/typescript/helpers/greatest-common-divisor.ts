export const getGreatestCommonDivisior = <
	T extends number[] | [],
	R extends T extends infer U ? (U extends [] ? null : number) : null
>(
	arrayNums: T
): R => {
	if (arrayNums.length === 0) return null as R;
	else if (arrayNums.length === 1) return arrayNums[0] as R;

	const greatestCommonDivisiorTwoNumbers = (
		num1: number,
		num2: number
	): number => {
		num1 = Math.abs(num1);
		num2 = Math.abs(num2);
		while (num1 !== num2) {
			if (num1 > num2) num1 -= num2;
			else num2 -= num1;
		}
		return num1;
	};

	let rest = greatestCommonDivisiorTwoNumbers(arrayNums[0], arrayNums[1]);
	for (let num of arrayNums)
		rest = greatestCommonDivisiorTwoNumbers(rest, num);

	return rest as R;
};
