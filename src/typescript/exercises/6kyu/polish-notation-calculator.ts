//* https://www.codewars.com/kata/52f78966747862fc9a0009ae/train/typescript

type IOperator = '+' | '-' | '*' | '/';

export function calc(expr: string): number {
	if (!expr) return 0;
	let numbers: number[] = [];
	const operators = {
		'+': (a: number, b: number) => b + a,
		'-': (a: number, b: number) => b - a,
		'*': (a: number, b: number) => b * a,
		'/': (a: number, b: number) => b / a,
	};
	for (let char of expr.split(' ')) {
		let nextNum: number;
		if (Object.keys(operators).includes(char)) {
			nextNum = operators[char as IOperator](
				numbers.pop()!,
				numbers.pop()!
			);
		} else nextNum = parseFloat(char);
		numbers.push(nextNum);
	}
	return numbers[0];
}