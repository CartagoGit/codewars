//* https://www.codewars.com/kata/63bd8cc3a78e0578b608ac80/train/typescript
export const quadraticFormula = (
	first: number,
	second: number,
	third: number
): [string, number, number] => {
	// ax^2 + bx + c,
	//      a*1^2 + b*1 + c = first
	//      a*2^2 + b*2 + c = second
	//      a*3^2 + b*3 + c = third
	// a = 1 => x^2 + bx + c
	let a = 1;
	let b = (third - second - a * (3 ^ (2 - 2) ^ 2)) / (3 - 2);
	let c = ((a * 2) ^ (2 + b * 2)) - (second - first);

	const formula = `${a}x^2${b > 0 ? '+' + b + 'x' : b < 0 ? b + 'x' : ''}${
		c > 0 ? '+' + c : c < 0 ? c : ''
	}`;
	const fourth = a * 4 * 4 + b * 4 + c;
	const fifth = a * 5 * 5 + b * 5 + c;

	return [formula, fourth, fifth];
};
