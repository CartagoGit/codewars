//* https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/typescript

export function basicOp(
	operation: string,
	value1: number,
	value2: number
): number {
	const operations: Record<string, (a: number, b: number) => number> = {
		'+': (a: number, b: number) => a + b,
		'-': (a: number, b: number) => a - b,
		'*': (a: number, b: number) => a * b,
		'/': (a: number, b: number) => a / b,
	};
	return operations[operation](value1, value2);
}
