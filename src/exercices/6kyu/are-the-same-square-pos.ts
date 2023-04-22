// https://www.codewars.com/kata/550498447451fbbd7600041c/train/typescript

export const initAreTheSameSquarePos = () => comp([2, 2, 3], [4, 9, 9]);

export const comp = (a1: number[] | null, a2: number[] | null): boolean => {
	if ([a1, a2].includes(null) || a1!.length !== a2!.length) return false;

	let squaredResult = a1!.map((n) => n * n);
	return a2!.every((n) => {
		const isInSquare = squaredResult.includes(n);
		const index = squaredResult.findIndex((num) => num === n);
		if (index !== -1) squaredResult.splice(index, 1);
		return isInSquare && index !== -1;
	});
};
