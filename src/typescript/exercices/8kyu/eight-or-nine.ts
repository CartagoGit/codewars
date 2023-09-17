export const initSimpleMultiplication = () => {
	const result = simpleMultiplication(0);
	return result;
};

export const simpleMultiplication = (num: number): number =>
	num % 2 === 0 ? num * 8 : num * 9;
