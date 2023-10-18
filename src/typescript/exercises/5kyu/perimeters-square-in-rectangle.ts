//* https://www.codewars.com/kata/559a28007caad2ac4e000083/train/typescript

export const perimeter = (num: number): number => {
	const fibonacci: number[] = [];
	fibonacci[0] = 1;
	fibonacci[1] = 1;
	let sum = 2;
	for (let square = 2; square <= num; square++) {
		fibonacci[square] = fibonacci[square - 1] + fibonacci[square - 2];
		sum += fibonacci[square];
	}
	return sum * 4;
};
